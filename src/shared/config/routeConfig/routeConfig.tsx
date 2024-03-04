import { LoginPage } from "pages/Login";
import { LogoutPage } from "pages/Logout";
import { NotFoundPage } from "pages/notFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    LOGIN = "main",
    LOGOUT = "about",
    NOT_FOUND = "not_found"
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.LOGOUT]: "/logout",
    [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutesPath.main,
        element: <LoginPage />
    },
    [AppRoutes.LOGOUT]: {
        path: RoutesPath.about,
        element: <LogoutPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPath.not_found,
        element: <NotFoundPage />
    }
};