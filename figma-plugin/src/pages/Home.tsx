import type { JSX } from "react";
import { Link } from "../components/Link/Link";

export const Home: () => JSX.Element = () => {
  return (
    <div>
      <h1>Design Schema</h1>
      <Link href={"/not-home"}>Call To Action</Link>
    </div>
  );
};
