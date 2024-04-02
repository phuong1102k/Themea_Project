import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import ProductsView from "@/views/ProductsView.vue";
import AboutView from "@/views/AboutView.vue";
import SignUpView from "@/views/SignUpView.vue";
import PaymentView from "@/views/PaymentView.vue";
import PayCompleteView from "@/views/PayCompleteView.vue";

const routes = [
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
    path: "/products",
    name: "products",
    component: ProductsView,
  },

  {
    path: "/product-detail/:productId",
    name: "product-detail",
    component: ProductDetailView,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignInView,
  },

  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUpView,
  },

  {
    path: "/payment",
    name: "payment",
    component: PaymentView,
  },

  {
    path: "/pay-complete",
    name: "/pay-complete",
    component: PayCompleteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
