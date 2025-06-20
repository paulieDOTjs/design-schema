import { createContext, useContext } from "react";
import { ROUTES } from "./models/ROUTES";

type RouteContextValues = {
  currentRoute: Readonly<(typeof ROUTES)[keyof typeof ROUTES]>;
  setCurrentRoute: (route: string) => void;
  routes: Readonly<string[]>;
};

export const RouteContext = createContext<RouteContextValues>({
  currentRoute: "/",
  setCurrentRoute: () => {
    throw new Error("There was an issue establishing Route Context");
  },
  routes: [],
});

export const useRouteContext = (): RouteContextValues => {
  return useContext(RouteContext);
};
