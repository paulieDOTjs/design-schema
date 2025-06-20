import { useEffect, useMemo, useState } from "react";
import type { RouteAndComponent } from "./router/models/RouteAndComponent";
import { RouteContext } from "./router/RouteContext";

export const App = ({ routes }: { routes: Readonly<RouteAndComponent[]> }) => {
  const [currentRoute, setCurrentRoute] = useState("/");
  const possiblePaths = useMemo(() => routes.map(({ path }) => path), [routes]);

  useEffect(() => {
    if (!possiblePaths.includes(currentRoute)) setCurrentRoute("/");
  }, [currentRoute, possiblePaths]);

  return (
    <RouteContext.Provider
      value={{ currentRoute, routes: possiblePaths, setCurrentRoute }}
    >
      {routes.find(({ path }) => currentRoute === path)?.component || null}
    </RouteContext.Provider>
  );
};
