import { Home } from "../pages/Home";
import { NotHome } from "../pages/NotHome";
import type { RouteAndComponent } from "./models/RouteAndComponent";
import { ROUTES } from "./models/ROUTES";

export const routing: Readonly<RouteAndComponent[]> = [
  { path: ROUTES.HOME, component: <Home /> },
  { path: ROUTES.NOT_HOME, component: <NotHome /> },
];
