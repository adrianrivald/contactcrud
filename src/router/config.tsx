import { ComponentType, lazy, LazyExoticComponent, ReactNode } from 'react';
import Fallback from '../pages/fallback/Fallback';

export interface IRoute {
  // Path, like in basic prop
  path: string;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  // If router is private, this is going to be true
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/home/Home')),
    fallback: Fallback,
  },
  {
    path: '/edit/:id',
    exact: true,
    component: lazy(() => import('../pages/editContact/EditContact')),
    fallback: Fallback,
  },
  {
    path: '/add',
    exact: true,
    component: lazy(() => import('../pages/addContact/AddContact')),
    fallback: Fallback,
  },
];
