import Home from '../pages/Home';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Detail from '../pages/Detail';

export default [
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/',
        component:Home
    },
    {
        name:'search', //使用对象传params参数必须用name
        path:'/search/:keyword?', //？表示keyword参数可传可不传
        component: Search,
        // props: true // 默认为false,true时会将所有的params参数映射到props
        // props:(route)=>({keyword3:route.params.keyword,keyword4:route.query.keyword2})
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component: Register
    }
]