import { Outlet, NavLink } from "react-router-dom"
export default function Layout() {
    return (
        <>
            <header className="flex flex-row justify-between">
                <h1>Session Finder</h1>
                <nav className="flex flex-row gap-4">
                    <NavLink to="/">Search</NavLink>
                    <NavLink to="/my-schedule">My Schedule</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}