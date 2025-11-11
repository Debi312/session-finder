import { Outlet, NavLink } from "react-router-dom"
import { useSchedule } from "../context/ScheduleContext";
export default function Layout() {
    const { sessionIds } = useSchedule();
    return (
        <>
            <header className="flex flex-row justify-between mb-8">
                <h1>Session Finder</h1>
                <nav className="flex flex-row gap-4">
                    <NavLink to="/">Search</NavLink>
                    <NavLink to="/my-schedule">My Schedule 
                        {sessionIds.length?` (${sessionIds.length})`: ""}
                    </NavLink>
                    <NavLink to="/register">Register</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}