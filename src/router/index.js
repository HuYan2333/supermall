import VueRouter from 'vue-router'
import Vue from 'vue'


//路由懒加载
const Home = () => import("views/home/Home")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile")
const Category = () => import("views/category/Category")
const Detail = () => import('views/detail/Detail')

//重写push 方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/detail/:iid',
    component:Detail,
  }
]
const router =new VueRouter({
  routes,
  mode:'history'
})


export default router
 
