<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body" v-if="cartList.length">
        <ul
          class="cart-list"
          v-for="cartItem in cartList"
          :key="cartItem.creatTime"
        >
          <li v-for="item in cartItem.cartInfoList" :key="item.id">
            <ul class="shopInfo">
              <li class="cart-list-con1">
                <input
                  type="checkbox"
                  name="chk_list"
                  :checked="item.isChecked === 1"
                  @change="checkCartItem(item)"
                />
              </li>
              <li class="cart-list-con2">
                <img :src="item.imgUrl" />
                <div class="item-msg">{{ item.skuName }}</div>
              </li>
              <li class="cart-list-con4">
                <span class="price">{{ item.skuPrice }}</span>
              </li>
              <li class="cart-list-con5">
                <a
                  href="javascript:void(0)"
                  class="mins"
                  @click="updateSkuNum(item, -1, true)"
                  >-</a
                >
                <input
                  autocomplete="off"
                  type="text"
                  :value="item.skuNum"
                  minnum="1"
                  class="itxt"
                  @change="updateSkuNum(item, $event.target.value, false)"
                />
                <a
                  href="javascript:void(0)"
                  class="plus"
                  @click="updateSkuNum(item, +1, true)"
                  >+</a
                >
              </li>
              <li class="cart-list-con6">
                <span class="sum">{{ item.skuNum * item.skuPrice }}</span>
              </li>
              <li class="cart-list-con7">
                <a
                  href="#none"
                  class="sindelet"
                  @click="$store.dispatch('getDeleteCartItem', item.skuId)"
                  >删除</a
                >
                <br />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="allCheck" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="deletAllSelected">删除选中的商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ totalProduct }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link to="/trade" class="sum-btn" >结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShopCart",
  data() {
    return {
      // cartList:
    };
  },
  created() {
    // 请求后台数据
    this.$store.dispatch("getCartList");
  },
  computed: {
    ...mapGetters(["cartList", "totalPrice", "totalProduct", , "isCheckedAll"]),
    allCheck: {
      get() {
        return this.isCheckedAll;
      },
      async set(value) {
        //点击改变全选状态
        this.$store.dispatch("checkAllCartItem", value);
      },
    },
  },

  methods: {
    // 删除所有选中的商品
    deletAllSelected() {
      // 过滤出所有选中商品的id
      const skuIdList = [];
      this.cartList.forEach((element) => {
        element.cartInfoList.forEach((item) => {
          if (item.isChecked === 1) {
            skuIdList.push(item.skuId);
          }
        });
      });
      console.log("商品数组", skuIdList);
      this.$store.dispatch("delAll", skuIdList);
    },
    // 改变选中状态
    checkCartItem(goods) {
      let { skuId, isChecked } = goods;
      if (isChecked === 1) {
        isChecked = 0;
      } else {
        isChecked = 1;
      }
      this.$store.dispatch("getCheckedStatus", { skuId, isChecked });
    },
    updateSkuNum(goods, changeSkuNum, flag) {
      const { skuId, skuNum } = goods;

      if (!flag) {
        // 先将数据转换为数字 若不是数字则默认指定为1
        changeSkuNum = changeSkuNum > 0 ? parseInt(changeSkuNum) : 0;
        // 若传入的数字，则计算出数据变化量
        if (changeSkuNum) {
          changeSkuNum = changeSkuNum - skuNum;
        }
      }
      const target = goods.skuNum + changeSkuNum;
      // 如果改变的数量和原本数量之和大于0
      if (target > 0) {
        // 向后台发送改变的数据量
        this.$store
          .dispatch("changeShopCart", { skuId, skuNum: changeSkuNum })
          .then((result) => {
            // console.log('更改成功');
            this.$store.dispatch("getCartList");
          })
          .catch((err) => {
            console.log("更改失败");
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 5%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 35%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 15%;
      }
    }

    .cart-body {
      margin: 15px 0;

      .cart-list {
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        width: 1178px;
        margin-bottom: 30px;
        /*height:82px;*/ /*不能设置高度，如果描述内容过多会溢出，应该由内容撑开*/
        /*overflow: hidden;*/
        &:after {
          content: "";
          display: block;
          clear: both;
        }
        & > li {
          float: left;
          width: 100%;
          border-top: 1px solid #ddd;
          padding: 20px;
          box-sizing: border-box;

          .shopInfo {
            width: 100%;
            /*overflow: hidden;*/
            & > li {
              float: left;
            }
            .cart-list-con1 {
              width: 5%;
            }

            .cart-list-con2 {
              width: 35%;

              img {
                width: 82px;
                height: 82px;
                float: left;
              }

              .item-msg {
                float: left;
                width: 150px;
                margin: 0 10px;
                line-height: 18px;
              }
            }

            .cart-list-con4 {
              width: 15%;
              div {
                position: relative;
                .sales-promotion {
                  color: #e2231a;
                  display: inline-block;
                  width: 56px;
                  border: 1px solid #f9d2d3;
                  text-align: left;
                  line-height: 20px;
                  padding: 0 5px 0 5px;
                  cursor: pointer;
                  background: #fff;
                  text-decoration: none;
                  overflow: hidden;
                  position: relative;
                  b {
                    position: absolute;
                    right: 8px;
                    top: 8px;
                    width: 7px;
                    height: 4px;
                    overflow: hidden;
                    font-weight: bolder;
                    background: url(https://misc.360buyimg.com/user/cart/css/i/cart-icons-202004.png) -82px -3px;
                  }
                  &:hover {
                    color: #e2231a !important;
                  }
                }
                .promotion-tips {
                  position: absolute;
                  padding: 10px 14px 10px 10px;
                  width: 276px;
                  top: 19px;
                  box-shadow: 0 0 2px 2px #eee;
                  border: 1px solid #e4393c;
                  background: none repeat scroll 0 0 #fff;
                  text-align: left;
                  z-index: 99;
                  .promotion-tit {
                    position: absolute;
                    height: 19px;
                    line-height: 17px;
                    border: 1px solid #e4393c;
                    border-bottom: 0;
                    top: -20px;
                    left: -1px;
                    background: #fff;
                    color: #e2231a;
                    padding: 0 15px 0 8px;
                    cursor: pointer;
                    width: 43px;
                  }
                  .promotion-cont {
                    position: relative;
                    z-index: 99;
                    line-height: 23px;
                    width: 280px;
                    ul {
                      display: block;
                      li {
                        display: block !important;
                        padding: 2px 5px;
                        .input {
                          border: 1px solid #ddd;
                          cursor: pointer;
                          box-sizing: border-box;
                          padding: 0;
                        }
                      }
                    }
                    .op-btns {
                      margin-top: 20px;
                      text-align: center;
                      .select-promotion {
                        font-family: arial, Microsoft YaHei;
                        display: inline-block;
                        height: 25px;
                        line-height: 25px;
                        background-color: #e74649;
                        background-image: linear-gradient(
                          0deg,
                          #e74649 0,
                          #df3134
                        );
                        border-radius: 3px;
                        color: #fff;
                        font-size: 12px;
                        font-weight: 400;
                        padding: 0 10px;
                        vertical-align: middle;
                        cursor: pointer;
                        border: 0;
                        float: none;
                        transition: all 0.2s ease-out;
                      }
                      .cancel-promotion {
                        margin-left: 10px;
                        transition: all 0.2s ease-out;
                        display: inline-block;
                        height: 23px;
                        line-height: 23px;
                        background-color: #f2f2f2;
                        background-image: linear-gradient(
                          0deg,
                          #f2f2f2 0,
                          #f7f7f7
                        );
                        border-radius: 3px;
                        color: #323333;
                        font-size: 12px;
                        font-weight: 400;
                        padding: 0 9px;
                        vertical-align: middle;
                        cursor: pointer;
                        float: none;
                        border: 1px solid #e1e1e1;
                      }
                    }
                    .p-coupon-item {
                      display: block;
                      margin: 10px 0;
                      overflow: hidden;
                      .coupon-price {
                        border-color: rgb(231, 70, 73);
                        position: relative;
                        height: 29px;
                        line-height: 29px;
                        width: 54px;
                        float: left;
                        font-size: 0;
                        margin: 2px 10px 0 0;
                        border: 1px solid #f9d2d3;
                        text-align: center;
                        padding: 0 2px;
                        .txt {
                          font-size: 12px;
                          color: rgb(231, 70, 73);
                          font-weight: 700;
                        }
                      }
                      .coupon-msg {
                        float: left;
                        width: 200px;
                        line-height: 18px;
                        font-weight: 400;
                      }
                      .coupon-opbtns {
                        float: left;
                        .coupon-btn {
                          display: inline-block;
                          height: 25px;
                          line-height: 25px;
                          background-color: #e74649;
                          border-radius: 3px;
                          color: #fff;
                          font-size: 12px;
                          font-weight: 400;
                          padding: 0 10px;
                          vertical-align: middle;
                          cursor: pointer;
                          border: 0;
                          float: none;
                        }
                      }
                    }
                  }
                }
              }
            }

            .cart-list-con5 {
              width: 15%;

              .mins {
                border: 1px solid #ddd;
                border-right: 0;
                float: left;
                color: #666;
                width: 6px;
                text-align: center;
                padding: 8px;
              }

              input {
                border: 1px solid #ddd;
                width: 40px;
                height: 33px;
                float: left;
                text-align: center;
                font-size: 14px;
              }

              .plus {
                border: 1px solid #ddd;
                border-left: 0;
                float: left;
                color: #666;
                width: 6px;
                text-align: center;
                padding: 8px;
              }
            }

            .cart-list-con6 {
              width: 15%;

              .sum {
                font-size: 16px;
              }
            }

            .cart-list-con7 {
              width: 15%;

              a {
                color: #666;
              }
            }
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>