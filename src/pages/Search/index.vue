<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="options.categoryName" @click="delCateName">
              {{ options.categoryName }}<i>×</i>
            </li>
            <li class="with-x" v-if="options.keyword" @click="delKeyWord">
              {{ options.keyword }}<i>×</i>
            </li>
            <li class="with-x" v-if="options.trademark" @click="delTradeMark">
              {{ options.trademark }}<i>×</i>
            </li>
            <li
              class="with-x"
              v-for="attrValue in options.props"
              :key="attrValue"
              @click="delAttr(attrValue)"
            >
              {{ attrValue }}<i>×</i>
            </li>
          </ul>
        </div>
        <!--selector-->
        <SearchSelector @updateTradeMark="updateTradeMark" @setAttr="setAttr" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{ active: isActive('1') }">
                  <a href="javascript:;" @click="setOrder('1')"
                    >综合
                    <i
                      class="iconfont"
                      v-if="isActive('1')"
                      :class="iconClass"
                    ></i
                  ></a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li :class="{ active: isActive('2') }">
                  <a href="javascript:;" @click="setOrder('2')"
                    >价格
                    <i
                      class="iconfont"
                      v-if="isActive('2')"
                      :class="iconClass"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="item in goodsList" :key="item.id">
                <div class="list-wrap">
                  <div class="p-img" >
                    <a @click.prevent="toDetail(item.id)"
                      ><img v-lazy="item.defaultImg"
                    /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i> {{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a @click.prevent="toDetail(item.id)" :title="item.title"
                      >{{ item.title }}}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <!-- <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div> -->
                </div>
              </li>
            </ul>
          </div>
          <Pagination
            :currentNo="options.pageNo"
            :pageSize="options.pageSize"
            :total="total"
            :showPageNo="5"
            @setPageNo="getProductList"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import { mapState } from "vuex";

export default {
  name: "Search",
  created() {
    this.updateByParams(this.$route);
  },
  data() {
    return {
      options: {
        category1Id: "", // 第1级分类ID
        category2Id: "", // 第2级分类ID
        category3Id: "", // 第3级分类ID
        categoryName: "", // 分类名称
        keyword: "", // 搜索关键字
        pageNo: 3, // 当前页码
        pageSize: 2, // 每页数量
        trademark: "", // 品牌条件   品牌ID:品牌名称,  4:小米
        props: [], // 多个属性条件    属性id:属性值:属性名 "2:6.65-6.74英寸:屏幕尺寸"
        order: "1:desc", // 排序条件  1: 综合,2: 价格 asc: 升序,desc: 降序   1:desc
      },
    };
  },
  // 监视路由参数变化
  watch: {
    $route(to, from) {
      this.updateByParams(to);
    },
  },
  components: {
    SearchSelector,
  },
  computed: {
    ...mapState({
      goodsList: (state) => state.search.productList.goodsList,
      total: (state) => state.search.productList.total,
      // totalPages: state => state.search.productList.totalPages
    }),

    iconClass() {
      return this.options.order.split(":")[1] === "desc"
        ? "icondown"
        : "iconup";
    },
  },
  methods: {
    // 设置跳转到详情页
    toDetail(skuId){
      const location = {
        name:'detail',
        params:{skuId}
      }
      this.$router.push(location);
    },

    // 设置排序条件
    setOrder(orderFlag) {
      const [flag, type] = this.options.order.split(":");
      let orderType;
      if (orderFlag === flag) {
        orderType = type === "desc" ? "asc" : "desc";
      } else {
        orderType = "desc";
      }
      // 更新order
      this.options.order = `${orderFlag}:${orderType}`;
      this.getProductList();
    },

    // 设定选中项目的颜色
    isActive(orderFlag) {
      return this.options.order.startsWith(orderFlag);
    },

    // 删除属性条件
    delAttr(attrValue) {
      this.options.props = this.options.props.filter(
        (value) => !(value === attrValue)
      );
      this.getProductList();
    },

    // 更新属性条件
    setAttr(attrValue) {
      if (this.options.props.indexOf(attrValue) !== -1) return;

      this.options.props.push(attrValue);
      this.getProductList();
    },

    // 更新品牌
    updateTradeMark(trademark) {
      // 阻止多次点击
      if (this.options.trademark === trademark) return;
      this.options.trademark = trademark;
      this.getProductList();
    },

    // 删除面包屑上的categoryName
    delCateName() {
      this.options.categoryName = "";
      this.options.category1Id = "";
      this.options.category2Id = "";
      this.options.category3Id = "";
      const location = {
        name: "search",
        params: this.$route.params,
      };
      this.$router.replace(location);
    },
    // 删除面包屑上的keyword
    delKeyWord() {
      this.options.keyword = "";
      const location = {
        name: "search",
        query: this.$route.query,
      };
      this.$router.replace(location);
      // 清理Header组件上的数据
      this.$bus.$emit("clearKeyword");
    },

    // 删除面包屑上的trademark
    delTradeMark() {
      this.options.trademark = "";
      this.getProductList();
    },
    // 更新请求参数
    updateByParams(route) {
      const { keyword } = route.params;
      const { categoryName, category1Id, category2Id, category3Id } = this.$route.query;
      this.options = {
        ...this.options,
        keyword,
        categoryName,
        category1Id,
        category2Id,
        category3Id,
      };
      this.getProductList();
    },
    // 发送请求,获取后台数据
    getProductList(page = 1) {
      // reqProduct
      this.options.pageNo = page;
      this.$store.dispatch("getProductInfo", this.options);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>