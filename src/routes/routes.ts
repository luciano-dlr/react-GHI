import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyLoad/pages/NoLLazy.tsx";

type JSXComponent = () => JSX.Element;

interface RoutesProps {
  id: string;
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage1" */ "../lazyLoad/layout/LazyLayout.tsx"
    )
);

export const routes: RoutesProps[] = [
  {
    id: "1",
    path: "/lazyLoad/*",
    to: "/lazyLoad/",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    id: "2",
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy Page",
  },
];
