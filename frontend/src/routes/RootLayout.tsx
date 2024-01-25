import { MainHeader } from "../components/MainHeader";
import { Outlet } from "react-router-dom";

export function RootLayout(): JSX.Element {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
}