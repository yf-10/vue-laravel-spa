export default {
    routes: [
        {
            path: '/tasks',
            name: 'task.list',
            component: () => import("../components/TaskListComponent.vue"),
        },
        {
            path: '/tasks/:taskId',
            name: 'task.show',
            component: () => import("../components/TaskShowComponent.vue"),
            props: true,
        },
        {
            path: '/tasks/create',
            name: 'task.create',
            component: () => import("../components/TaskCreateComponent.vue"),
        },
        {
            path: '/tasks/:taskId/edit',
            name: 'task.edit',
            component: () => import("../components/TaskEditComponent.vue"),
            props: true,
        },
    ]
};
