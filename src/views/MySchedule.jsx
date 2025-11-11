import { useSchedule } from "../context/ScheduleContext";
import { SESSIONS } from "../api";
export default function MySchedule() {
  const { sessionIds, remove } = useSchedule()

  const sessions = SESSIONS.filter((session) => sessionIds.includes(session.id))
  if (sessions.length === 0) {
    return <p className="text-center col-span-3 mt-6">No sessions in your schedule yet.</p>
  }

  const formatDateTime = (date) =>
    new Date(date).toLocaleString("es-ES", {
      dateStyle: "medium",
      timeStyle: "short",
    })
  return (
    <>
      {sessions.map((session) => (
        <article key={session.id} className="flex flex-row justify-between items-center border border-border rounded-lg p-6 mt-4 bg-white">
          <h2 className="text-lg font-bold mb-2">{session.title}</h2>

          <p className="text-sm text-accent">{session.track}</p>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-600"><strong>Speaker:</strong>  {session.speaker}</p>
            <p className="text-sm text-gray-600"><strong>Time:</strong> {formatDateTime(session.startsAt)}</p>
            <p className="text-sm text-gray-600"><strong>Duration :</strong> {session.durationMins} min</p>
          </div>

          <button
            className="px-4 py-2 cursor-pointer bg-accent text-white rounded-lg"
            onClick={() => remove(session.id)}
          >
            Remove
          </button>
        </article>
      ))}
    </>
  )
}
