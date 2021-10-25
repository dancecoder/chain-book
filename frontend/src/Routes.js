import { MainPage } from "./pages/MainPage"
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { AvatarPage } from "./pages/AvatarPage";
import {App} from "./App"

export default [
    {
        component: App,
        routes: [
            {
                component: MainPage,
                path: "/",
                exact: true
            },
            {
                component: SignupPage,
                path: "/signup",
                exact: true
            },
            {
                component: LoginPage,
                path: "/login",
                exact: true
            },
            {
                component: AvatarPage,
                path: "/{username}",
                exact: true
            }
        ]
    }
];