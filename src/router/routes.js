import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

// 路由懒加载 
// 当路由被访问时，才会调用路由函数
// import Search from "../pages/Search";
const Search = () => import('../pages/Search');
// import Detail from "../pages/Detail";
const Detail = () => import('../pages/Detail');
// import ShopCart from "../pages/ShopCart";
const ShopCart = () => import('../pages/ShopCart');
// import AddCartSuccess from "../pages/Addcartsuccess";
const AddCartSuccess = () => import('../pages/Addcartsuccess');
// import Pay from "../pages/Pay";
const Pay = () => import('../pages/Pay');

import Trade from "../pages/Trade";
import Paysuccess from "../pages/PaySuccess";
import Center from "../pages/Center";
import MyOrder from "../pages/Center/myOrder";
import Refund from  "../pages/Center/Refund";

export default [
  {
    name: "center",
    path: "/center",
    component: Center,
    // 设置子路由
    children:[
      // 默认路由
      {
        path: '',
        redirect:'myorder'
      },
      {
        name: "myOrder",
        path: "myorder",
        component: MyOrder,
      },
      {
        // name: "myOrder",
        path: "refund",
        component: Refund,
      },
      
    ]

  },
  {
    name: "paysuccess",
    path: "/paysuccess",
    component: Paysuccess,
  },
  {
    name: "trade",
    path: "/trade",
    component: Trade,
  },
  {
    name: "pay",
    path: "/pay",
    component: Pay,
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
  },
  {
    name: "detail",
    path: "/detail/:skuId",
    component: Detail,
  },
  {
    path: "/",
    component: Home,
  },
  {
    name: "search", //使用对象传params参数必须用name
    path: "/search/:keyword?", //？表示keyword参数可传可不传
    component: Search,
    // props: true // 默认为false,true时会将所有的params参数映射到props
    // props:(route)=>({keyword3:route.params.keyword,keyword4:route.query.keyword2})
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
