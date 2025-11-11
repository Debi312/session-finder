export default function Search() {
    return (
        <div>
            <header>
                <input
                    className="w-full border border-border p-2 rounded-lg placeholder:text-gray-400"
                    type="text" id="search" placeholder="Search by title, track or speaker..." />
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                <article className="border border-border rounded-lg p-6 mt-4 bg-white">
                    <p className="text-sm text-accent">Track Name</p>
                    <h2 className="text-lg font-bold mb-2">Session Title</h2>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-600"><strong>Speaker:</strong>  Name</p>
                        <p className="text-sm text-gray-600"><strong>Time:</strong> Time :10:00 AM - 11:00 AM</p>
                        <p className="text-sm text-gray-600"><strong>Duration :</strong> 1 hour</p>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-accent text-white rounded-lg">Add to Schedule</button>
                </article>
            </main>
        </div>
    )
}