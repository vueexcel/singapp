import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import LayoutAdmin from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// === Main
import Profile from '@/pages/Profile/Profile';
import Checkin from '@/pages/Checkin/Checkin';
import WeeklyReview from '@/pages/WeeklyReview/WeeklyReview';
// --admin pages--
import ManageEmployee from '@/pages/ManageEmployee/ManageEmployee';
import ManageKPI from '@/pages/Kpi/Kpi';


// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [{
          path: 'profile',
          name: 'Profile',
          component: Profile,
        },
        {
          path: 'checkin',
          name: 'Checkin',
          component: Checkin,
        },
        {
          path: 'weeklyReview',
          name: 'WeeklyReview',
          component: WeeklyReview,
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
      ],
    },
    {
      path: '/admin',
      name: 'LayoutAdmin',
      component: LayoutAdmin,
      children: [{
          path: 'manageKpi',
          name: 'ManageKPI',
          component: ManageKPI,
        },
        {
          path: 'manageEmployee',
          name: 'ManageEmployee',
          component: ManageEmployee,
        },
      ],
    },
  ],
});