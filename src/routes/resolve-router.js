import view from '../pages/view';
import admin from '../pages/admin';
import viewList from "../pages/viewList";
import viewDetail from "../pages/viewDetail";
import bangumiList from "../pages/bangumiList";
import bangumiEdit from "../pages/bangumiEdit";
const routes = [{
    path: '/',
    redirect:"/view",
  },{
    path:"/admin",
    name:"amdin",
    component:admin,
    children:[
      {
        path:"list",
        name:"adminList",
        component:bangumiList
      },
      {
        path:"edit/:id",
        name:"adminEdit",
        component:bangumiEdit,
        props: true
      },
      {
        path:"edit",
        name:"adminAdd",
        component:bangumiEdit,
        props: true
      },
      {
        path:"view/:id",
        name:"adminView",
        component:viewDetail,
        props: true
      }
      
    ]
  },{
    path:"/view",
    name:"view",
    component:view,
    redirect:"/view/list",
    children:[
      {
        path:"detail/:id",
        name:"viewDetail",
        component:viewDetail,
        props: true
      },
      {
        path:"list",
        name:"viewList",
        component:viewList
      }
    ]
  }];

export default routes;