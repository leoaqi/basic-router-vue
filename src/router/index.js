import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CardView from "@/views/CardView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ManufacturView from "../views/MAnufacturView.vue";
import DealerView from "@/views/DealerView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/car/:id",
            name: "car",
            component: CardView,
            children: [
                {
                    path: "manufacture",
                    name: "manufacture",
                    component: ManufacturView
                },
                {
                    path: "dealer",
                    name: "dealer",
                    component: DealerView
                }
            ],
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFoundView,
        },
    ],
});

export default router