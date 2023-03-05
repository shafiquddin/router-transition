import {createRouter,createWebHistory} from 'vue-router';
import AllUsers from './pages/AllUsers.vue';
import UsersGoal from './pages/UsersGoal.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:AllUsers},
        {path:'/goals',component:UsersGoal}
    ]
})

export default router;