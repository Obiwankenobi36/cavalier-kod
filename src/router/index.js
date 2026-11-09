import { createWebHistory, createRouter } from "vue-router";

import CavalierMainPage from "../components/Pages/CavalierMainPage";
import FaqPage from "../components/Pages/FaqPage";
import ContactPage from "../components/Pages/ContactPage";
import AboutPage from "../components/Pages/AboutPage";
import PortfolioPage from "../components/Pages/PortfolioPage";
import NewsPage from "../components/Pages/NewsPage";
import NewsDetailsPage from "../components/Pages/NewsDetailsPage";
import HealthPage from "../components/Pages/HealthPage";
import HealthDetailsPage from "../components/Pages/HealthDetailsPage";
import PortfolioDetailsPage from "../components/Pages/PortfolioDetailsPage";

const routes = [
  { path: "/", name: "ITStartupPage", component: CavalierMainPage },
  { path: "/faq", name: "FaqPage", component: FaqPage },
  { path: "/kontakt", name: "ContactPage", component: ContactPage },
  { path: "/o-pasmini", name: "AboutOne", component: AboutPage },
  { path: "/psi", name: "Portfolio", component: PortfolioPage },
  { path: "/psi/:id", name: "Dogs portfolio", component: PortfolioDetailsPage },
  { path: "/novosti", name: "Novosti", component: NewsPage },
  { path: "/novosti-detalji/:id", name: "Detalji novosti", component: NewsDetailsPage },
  { path: "/zdravlje", name: "Zdravlje", component: HealthPage },
  { path: "/zdravlje/:id", name: "Detalji zdravlja", component: HealthDetailsPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
