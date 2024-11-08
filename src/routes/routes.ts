import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface RoutesProps {
  id: string;
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage1" */ "../lazyLoad/pages/LazyPage1.tsx"
    )
);
const Lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage2" */ "../lazyLoad/pages/LazyPage2.tsx"
    )
);
const Lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage3" */ "../lazyLoad/pages/LazyPage3.tsx"
    )
);

export const routes: RoutesProps[] = [
  {
    id: "1",
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy Page 1",
  },
  {
    id: "2",
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy Page 2",
  },
  {
    id: "3",
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy Page 3",
  },
];
