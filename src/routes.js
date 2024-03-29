import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/about/About";
import Admain from "./components/Admain"
import Login from "./components/Login";
import Register from "./components/Register";


//引入二级路由
import Contact from "./components/about/Contact";
import Delivery from "./components/about/Delivery";
import History from "./components/about/History";
import OrderingGuide from "./components/about/OrderingGuide";
//三级路由
import PersonName from "./components/about/contact/PersonName";
import Phone from "./components/about/contact/Phone";


//export公开，main.js中可以引用了
export const routes=[
  {path: '/',name:"homeLink",components:{
default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    }},
  {path: '/menu',name:"menuLink",component:Menu},
  {path: '/about',name:"aboutLink",redirect:'/about/contact',component:About,children:[
      {path: '/about/contact',name:"contactLink",redirect:'/phone',component:Contact,children:[
          {path: '/phone',name:"phoneNumber",component:Phone},
          {path: '/personname',name:"personName",component:PersonName},

        ]},
      {path: '/history',name:"historyLink",component:History},
      {path: '/delivery',name:"deliveryLink",component:Delivery},
      {path: 'orderGuide',name:"orderGuideLink",component:OrderingGuide},

    ]},
  {path: '/admain',name:"admainLink",component:Admain},
  //beforeEnter:(to,from,next) =>{
//路由独享守卫
  // alert("不可以进入");
// next(false);
// if (to.path=='/login'||to.path=='/register'){
// next();
// }else {
//   alert("还没有登录，请先登录");
//   next('/login');
// }
//
  {path: '/login',name:"loginLink",component:Login},
  {path: '/register',name:"registerLink",component:Register},
  {path: '*',redirect:'/'},
]
