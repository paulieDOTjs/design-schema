import "@figma/plugin-typings";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
