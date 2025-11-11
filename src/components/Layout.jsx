import { Outlet, NavLink } from "react-router-dom"
import { useSchedule } from "../context/ScheduleContext";
export default function Layout() {
    const { sessionIds } = useSchedule();

    //TODO : añadir logo y mejorar estilos
    return (
        <>
            <header className="flex flex-row justify-between items-center mb-8 ">
                <h1 className="text-2xl font-bold text-gray-800">Session Finder</h1>
                <nav className="flex flex-row gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `
                            px-4 py-2 rounded-lg font-medium transition-all duration-200
                            ${isActive
                                ? "bg-accent text-white shadow-md"
                                : "text-gray-700 hover:bg-accent/10 hover:text-accent"
                            }
                        `}
                    >
                        Search
                    </NavLink>
                    <NavLink
                        to="/my-schedule"
                        className={({ isActive }) => `
                            px-4 py-2 rounded-lg font-medium transition-all duration-200 relative
                            ${isActive
                                ? "bg-accent text-white shadow-md"
                                : "text-gray-700 hover:bg-accent/10 hover:text-accent"
                            }
                        `}
                    >
                        My Schedule
                        {sessionIds.length ? (
                            <span className="ml-2 inline-block bg-background  border border-accent text-accent text-xs font-bold px-2 py-1 rounded-full">
                                {sessionIds.length}
                            </span>
                        ) : ""}
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) => `
                            px-4 py-2 rounded-lg font-medium transition-all duration-200
                            ${isActive
                                ? "bg-accent text-white shadow-md"
                                : "text-gray-700 hover:bg-accent/10 hover:text-accent"
                            }
                        `}
                    >
                        Register
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}