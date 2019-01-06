import view from '../pages/view';
import admin from '../pages/admin';
import viewList from "../pages/viewList";
import viewDetail from "../pages/viewDetail";
import bangumi from "../pages/bangumi";
import bangumiList from "../pages/bangumiList";
import bangumiEdit from "../pages/bangumiEdit";

import torrent from "../pages/torrent";
import torrentList from "../pages/torrentList";
import torrentEdit from "../pages/torrentEdit";
import torrentView from "../pages/torrentView";

import crawlerSetting from "../pages/crawlerSetting";
import crawlerSettingList from "../pages/crawlerSetting/crawlerSettingList";
import crawlerSettingEdit from "../pages/crawlerSetting/crawlerSettingEdit";
import crawlerSettingView from "../pages/crawlerSetting/crawlerSettingView";

import bvideo from "../pages/bvideo";
import bvideoList from "../pages/bvideo/bvideoList";
import bvideoEdit from "../pages/bvideo/bvideoEdit";






const routes = [{
    path: '/',
    redirect:"/view",
  },{
    path:"/admin",
    name:"amdin",
    component:admin,
    children:[
      {
        path:"bangumi",
        name:"bangumi",
        component:bangumi,
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
      },
      {
        path:"torrent",
        name:"torrent",
        component:torrent,
        children:[
          {
            path:"list",
            name:"torrentList",
            component:torrentList
          },
          {
            path:"edit/:id",
            name:"torrentEdit",
            component:torrentEdit,
            props: true
          },
          {
            path:"edit",
            name:"torrentAdd",
            component:torrentEdit,
            props: true
          },
          {
            path:"view/:id",
            name:"torrentView",
            component:torrentView,
            props: true
          }
        ]
      },{
        path:"crawlerSetting",
        name:"crawlerSetting",
        component:crawlerSetting,
        children:[
          {
            path:"list",
            name:"crawlerSettingList",
            component:crawlerSettingList
          },
          {
            path:"edit",
            name:"crawlerSettingAdd",
            component:crawlerSettingEdit
          },
          {
            path:"edit/:id",
            name:"crawlerSettingEdit",
            component:crawlerSettingEdit,
            props: true
          },
          {
            path:"view/:id",
            name:"crawlerSettingView",
            component:crawlerSettingView,
            props: true
          }
        ]
      },{
        path:"bvideo",
        name:"bvideo",
        component:bvideo,
        children:[
          {
            path:"list",
            name:"bvideoList",
            component:bvideoList
          },
          {
            path:"edit",
            name:"bvideoEdit",
            component:bvideoEdit
          },
          {
            path:"edit/:id",
            name:"bvideoEdit",
            component:bvideoEdit,
            props: true
          }
          
        ]
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
        component:viewList,
        meta: {
          keepAlive: true // 需要被缓存
        }
      }
    ]
  }];

export default routes;