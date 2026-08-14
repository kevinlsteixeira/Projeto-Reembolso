import { Routes, Route } from "react-router";
import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
            </Route>
        </Routes>
    )
}