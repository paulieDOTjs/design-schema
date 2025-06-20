import type { JSX } from "react";
import { Link } from "../components/Link/Link";

export type NotHomeProps = {} & Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "children"
>;

export const NotHome: (props: NotHomeProps) => JSX.Element = ({ ...rest }) => {
  return (
    <div {...rest}>
      I am not home
      <Link href={"/"}> back home</Link>
    </div>
  );
};
