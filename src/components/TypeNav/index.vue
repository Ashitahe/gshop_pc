<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="showFirst" @mouseleave="hideFirst">
        <h2 class="all">全部商品分类</h2>
        <transition name="fade">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item bo"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ item_on: index === currentIndex }"
                @mouseenter="showSubCategorys(index)"
              >
                <h3>
                  <a
                    href="javascript:;"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <!-- 声明式导航使用对象携带参数 -->
                        <!-- <router-link :to="{path:'/search',query:{caetgoryName:c2.categoryName}}">{{ c2.categoryName }}</router-link> -->
                        <!-- 编程式导航 -->
                        <!-- <a
                        href="javascript:;"
                        @click="$router.push(`/search?categoryName=${c2.categoryName}`)"
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      > -->
                        <!-- 事件委托 -->
                        <a
                          href="javascript:;"
                          @click="
                            $router.push(
                              `/search?categoryName=${c2.categoryName}`
                            )
                          "
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <!-- 编程式导航 -->
                          <!-- <a
                          href="javascript:;"
                          @click="$router.push(`/search?categoryName=${c3.categoryName}`)"
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                          
                        > -->
                          <!-- 事件委托 -->
                          <a
                            href="javascript:;"
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- 字符串拼接携带参数 -->
                          <!-- <router-link :to="`/search?categoryName=${ c3.categoryName }`">{{ c3.categoryName}}</router-link> -->
                          <!-- <router-link :to="{path:'/search',query:{caetgoryName:c3.categoryName}}">{{ c3.categoryName }}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: this.$route.path === "/",
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.baseCategoryList,
    }),
  },
  methods: {
    hideFirst() {
      this.currentIndex = -2;
      if (this.$route.path !== "/") {
        this.isShow = false;
      }
    },
    showFirst() {
      this.isShow = true;
      this.currentIndex = -1;
    },

    showSubCategorys: throttle(
      function (index) {
        if (index !== -2) {
          this.currentIndex = index;
        }
      },
      150,
      {
        trailing: false,
      }
    ),

    toSearch(event) {
      let target = event.target.dataset;
      const { categoryname, category1id, category2id, category3id } = target;

      if (!categoryname) return;

      const query = {
        categoryName: categoryname,
      };
      if (category1id) {
        query.category1Id = category1id;
      } else if (category2id) {
        query.category2Id = category2id;
      } else {
        query.category3Id = category3id;
      }
      const location = {
        name: "search",
        query,
        params: this.$route.params,
      };
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        console.log("走push");
        this.$router.push(location);
      }
      console.log("我还没销毁");
      this.hideFirst();
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      // 过渡动画
      &.fade-enter-active,
      &.fade-leave-active {
        transition: all 0.5s;
      }
      &.fade-enter,
      &.fade-leave-to {
        opacity: 0;
        height: 0;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
