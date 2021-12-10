import {
  addToShopCart,
  reqCartList,
  reqCheckedStatus,
  reqDeleteCartItem,
} from "@/api";
const state = {
  cartList: [],
};

const mutations = {
  CARTLIST(state, list) {
    state.cartList = list;
  },
};

const actions = {
  // 更改购物车商品的数量
  async changeShopCart({ commit }, { skuId, skuNum }) {
    try {
      const res = await addToShopCart(skuId, skuNum);
    } catch (err) {
      console.log("添加购物车失败2");
      return Promise.reject(err);
    }
  },
  //   拉取购物车最新状态
  async getCartList({ commit }) {
    const res = await reqCartList();
    if (res.code === 200) {
      const cartList = res.data;
      commit("CARTLIST", cartList);
    }
  },
  //   切换单个商品的选中状态
  async getCheckedStatus({ dispatch }, { skuId, isChecked }) {
    const res = await reqCheckedStatus(skuId, isChecked);
    if (res.code === 200) {
      dispatch("getCartList");
    }
  },
  //   切换所有商品的选中状态
  async checkAllCartItem({ dispatch, state }, isCheck) {
    // 确定新值的状态
    const isChecked = isCheck ? 1 : 0;
    // 得到所有选中项的skuId数组
    const skuIdList = [];
    state.cartList.forEach((element) => {
      element.cartInfoList.forEach((item) => {
        if (isChecked !== item.isChecked) {
          skuIdList.push(item.skuId);
        }
      });
    });
    console.log(skuIdList);

    // 更改每个不同的选中状态的数组
    const promises = [];
    skuIdList.forEach((skuId) => {
      promises.push(reqCheckedStatus(skuId, isChecked));
    });
    Promise.all(promises).then((value) => dispatch("getCartList"));
  },
  //   删除一个商品
  async getDeleteCartItem({ dispatch }, skuId) {
    const res = await reqDeleteCartItem(skuId);
    if (res.code === 200) {
      console.log("删除成功");
      dispatch("getCartList");
    }
  },
  //   删除选中的商品
  async delAll({ dispatch }, skuIdList) {
    if (!skuIdList.length) return;
    const promises = [];
    skuIdList.forEach((item) => {
      promises.push(reqDeleteCartItem(item));
    });
    Promise.all(promises).then((value) => dispatch("getCartList"));
  },
  // 清除选中的商品
  deleteCheckedCartItem({ state, dispatch }) {
    // 得到所有选中购物项的skuId的数组
    const skuIdList = [];
    state.cartList.forEach((item) => {
      item.cartInfoList.forEach((cItem) => {
        if (cItem.isChecked === 1) {
          skuIdList.push(cItem.skuId);
        }
      });
    });
    dispatch("delAll", skuIdList)
    .then(() => {
      this.$message.success("清除购物车成功");
    })
    .catch(reason => {throw reason});
  },
};

const getters = {
  cartList(state) {
    return state.cartList;
  },
  //   计算总价格
  totalPrice(state) {
    return state.cartList.reduce((preTotal, cartItem) => {
      return (preTotal += cartItem.cartInfoList.reduce(
        (pre, item) =>
          (pre += item.isChecked === 1 ? item.skuNum * item.skuPrice : 0),
        0,
        0
      ));
    }, 0);
  },
  //   计算一共有多少选中商品
  totalProduct(state) {
    return state.cartList.reduce((preTotal, cartItem) => {
      return (preTotal += cartItem.cartInfoList.reduce(
        (count, item) => (count = item.isChecked === 1 ? ++count : count),
        0
      ));
    }, 0);
  },
  //   计算全选
  isCheckedAll(state, getters) {
    return state.cartList.every(
      (cartItem) =>
        cartItem.cartInfoList.every((item) => item.isChecked === 1) &&
        getters.totalProduct > 0
    );
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
