export default function MySchedule() {
  return (
    <>
      <article className="flex flex-row justify-between items-center border border-border rounded-lg p-6 mt-4 bg-white">
      <h2 className="text-lg font-bold mb-2">Session Title</h2>
      <p className="text-sm text-accent">Track Name</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-600"><strong>Speaker:</strong>  Name</p>
          <p className="text-sm text-gray-600"><strong>Time:</strong> Time :10:00 AM - 11:00 AM</p>
          <p className="text-sm text-gray-600"><strong>Duration :</strong> 1 hour</p>
        </div>
        <button className="px-4 py-2 bg-accent text-white rounded-lg">Add to Schedule</button>
      </article>
    </>
  )
}
