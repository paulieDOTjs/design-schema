import classNames from "classnames";
import styles from "./button.module.scss";
import type { JSX } from "react";

export type ButtonProps = {} & Omit<JSX.IntrinsicElements["button"], "ref">;

export const Button: (props: ButtonProps) => JSX.Element = ({
  className,
  ...rest
}) => {
  return (
    <button {...rest} className={classNames(styles["button"], className)} />
  );
};
