import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import App from "./App";
import { Test, VehiclesDP, VehiclesPC } from "../routes";

const rootRoute = createRouteConfig({
  component: () => <App />,
});

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: VehiclesPC,
});

const dpRoute = rootRoute.createRoute({
  path: "/dp",
  component: VehiclesDP,
});

const testRoute = rootRoute.createRoute({
  path: "/test",
  component: Test,
});

const routeConfig = rootRoute.addChildren([indexRoute, dpRoute, testRoute]);

const router = createReactRouter({ routeConfig });
export default router;
