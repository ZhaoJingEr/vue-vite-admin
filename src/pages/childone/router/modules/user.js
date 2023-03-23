export default [
  {
    path: '/user',
    component: () => import('@childone/views/user/index.vue'),
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@childone/views/user/login.vue'),
      },
    ],
  },
];
