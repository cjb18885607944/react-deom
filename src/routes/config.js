import { redirect } from 'react-router-dom'
import Home from '../pages/Home'
import StudyReact from '../pages/StudyReact'
import ToDo from '../pages/Todo'
import Png2Gif from '../pages/CreateGif'
const routeConfig = [
    {
        name:'开始',
        path:'/home',
        component: Home
    },{
        name:'react学习',
        path:'/react-study',
        component: StudyReact
    },{
        name:'代办',
        path:'/todo',
        component:ToDo
    },{
        name:'png合成gif',
        path:'/png2gif',
        component:Png2Gif
    }
]

export default routeConfig