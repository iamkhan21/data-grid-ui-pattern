import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import App from "./App";
import { AdaptiveMenu, VehiclesDP, VehiclesPC } from "../routes";

const rootRoute = createRouteConfig({
  component: App,
});

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: VehiclesPC,
});

const dpRoute = rootRoute.createRoute({
  path: "/dp",
  component: VehiclesDP,
});

const adaptiveMenuRoute = rootRoute.createRoute({
  path: "/adaptive-menu",
  component: AdaptiveMenu,
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  dpRoute,
  adaptiveMenuRoute,
]);

const router = createReactRouter({ routeConfig });
export default router;
