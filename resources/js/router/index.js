import {createRouter, createWebHistory } from "vue-router";
import Content from "./content";

const routes = Content.routes;

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
