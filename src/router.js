import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './screens/HomePage.vue';
import ProtectYourself from './screens/ProtectYourself.vue';
import News from './screens/News.vue';
import FAQs from './screens/FAQs.vue';
import GlobalData from './screens/GlobalData.vue';

Vue.use(Router);

let router = new Router({
    routes: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage,
      },
      {
        path: '/protect-yourself',
        name: 'ProtectYourself',
        component: ProtectYourself,
      },
      {
        path: '/news',
        name: 'News',
        component: News,
      },
      {
        path: '/FAQs',
        name: 'FAQs',
        component: FAQs,
      },
      {
        path: '/global',
        name: 'GlobalData',
        component: GlobalData,
      },
      // {
      //   path: '*',
      //   name: 'ErrorPage',
      //   component: ErrorPage
      // }
    ]
  });

  
  export default router;


