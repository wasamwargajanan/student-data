export default  [
    {
        path:'/',
        name: 'HomeVue',
        component: () => import('@/components/Home.vue')
    },
    {
        path:'/about',
        name: 'AboutVue',
        component: () => import('@/components/About.vue')
    },
    {
        path:'/gallery',
        name: 'GalleryVue',
        component: () => import('@/components/Gallery.vue')
    },
    {
        path:'/contact',
        name: 'ContactVue',
        component: () => import('@/components/Contact.vue')
    }
    
]