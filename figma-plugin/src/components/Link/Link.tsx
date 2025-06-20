import classNames from "classnames";
import styles from "./link.module.scss";
import { useCallback, type JSX } from "react";
import { useRouteContext } from "../../router/RouteContext";
import type { ROUTES } from "../../router/models/ROUTES";

export type LinkProps = { href: (typeof ROUTES)[keyof typeof ROUTES] } & Omit<
  JSX.IntrinsicElements["a"],
  "ref" | "href"
>;

export const Link: (props: LinkProps) => JSX.Element = ({
  className,
  href,
  ...rest
}) => {
  const { setCurrentRoute } = useRouteContext();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setCurrentRoute(href);
    },

    [href, setCurrentRoute]
  );

  return (
    <a
      {...rest}
      onClick={handleClick}
      href={href}
      className={classNames(styles["link"], className)}
    />
  );
};
