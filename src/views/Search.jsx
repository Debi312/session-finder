import { useState, useEffect } from "react";
import { searchSessions, SESSIONS } from "../api";
import { useSchedule } from "../context/ScheduleContext";
export default function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const { sessionIds, add, remove } = useSchedule();

    useEffect(() => {
        setLoading(true)

        const fetchRsults = setTimeout(async () => {
            const response = await searchSessions(searchTerm)
            setResults(response)
            setLoading(false)
        }, 500);

        return () => clearTimeout(fetchRsults);
    }, [searchTerm]);

    const formatDateTime = (date) =>
        new Date(date).toLocaleString("es-ES", {
            dateStyle: "medium",
            timeStyle: "short",
        })


    return (
        <div>
            <header>
                <input
                    className="w-full border border-border p-2 rounded-lg placeholder:text-gray-400"
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    id="search"
                    placeholder="Search by title, track or speaker..." />
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                {loading ? (
                    <p className="text-center col-span-3">Loading...</p>
                ) : (results.map(session => (

                    <article key={session.id} className="border border-border rounded-lg p-6 mt-4 bg-white">
                        <p className="text-sm text-accent">{session.trackName}</p>
                        <h2 className="text-lg font-bold mb-2">{session.title}</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-600"><strong>Speaker:</strong>  {session.speaker}</p>
                            <p className="text-sm text-gray-600"><strong>Time:</strong> {formatDateTime(session.startsAt)}</p>
                            <p className="text-sm text-gray-600"><strong>Duration :</strong> {session.durationMins} min</p>
                        </div>
                        <button
                            disabled={false}
                            onClick={() =>
                                sessionIds.includes(session.id)
                                    ? remove(session.id)
                                    : add(session.id)
                            }
                            className={`w-full mt-4 px-4 py-2 cursor-pointer text-white rounded-lg ${sessionIds.includes(session.id) ? "bg-accent/50" : "bg-accent text-white"}`}

                        >
                            {sessionIds.includes(session.id) ? "Remove from Schedule" : "Add to Schedule"}

                        </button>
                    </article>
                )))}
            </main>
        </div>
    )
}