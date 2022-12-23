import EditNote from "../routersamples/EditNote"
import Markdown from "../routersamples/Markdown"

export const siteRoutes = [
    {
        path:'/',
        element:<EditNote/>
    },
    {
        path:'/markdown',
        element:<Markdown/>
    },
    {
        path:'*',
        element:<NoMatch/>
    },
]