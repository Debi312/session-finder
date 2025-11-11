import { useState } from "react";
import { registerAttendee } from "../api"
export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const [error, setError] = useState("")
    const [successId, setSuccessId] = useState(null)

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        //TODO : improve validation
        if (!name || !email || !role) {
            setError("Please fill in all fields.")
            return
        }

        //TODO: imrove email validation
        if (!email.includes("@")) {
            setError("Please enter a valid email.")
            return
        }

        setLoading(true)
        setError("")

        try {
            const payload = { name, email, role }
            const response = await registerAttendee(payload)
            setSuccessId(response)
            setName("")
            setEmail("")
            setRole("")

        } catch (error) {
            console.error("Error registering attendee:", error)
            setError("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }

    }

    // TODO componetizar form inputs
    return (
        <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto gap-6  p-8 rounded-xl border border-border shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-900">Register </h2>

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
                <input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    className="border border-gray-300 p-3 rounded-lg  focus:outline-none focus:border-2 focus:border-accent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
                <input
                    placeholder="you@example.com"
                    id="email"
                    type="email"
                    className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-2 focus:border-accent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>


            <div className="flex flex-col gap-2">
                <label htmlFor="role" className="font-semibold text-gray-700">Role</label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border border-gray-300 p-3 rounded-lg  focus:outline-none focus:border-2 focus:border-accent"
                >
                    <option value="">Select role</option>
                    <option value="Student">Student</option>
                    <option value="Junior">Junior</option>
                    <option value="Mid">Mid</option>
                    <option value="Senior">Senior</option>
                </select>
            </div>

            {/* TODO : implement error in every input */}
            {error && <p className="text-red-600">{error}</p>}


            {/* TODO : add spinner*/}
            <button
                type="submit"
                disabled={loading}
                className={`bg-accent  text-white py-2 rounded hover:bg-accent/90 disabled:bg-gray-400 mt-6 ${loading ? "cursor-not-allowed  hover:bg-gray-600" : "cursor-pointer"}`}
            >
                {loading ? "Submitting..." : "Submit Registration"}

            </button>

{/* TODO : add allow copy to clipboard functionality */}

            {successId?.ok &&
                <div className="mt-8 bg-white p-8 rounded-xl border border-border text-center">
                    <h3 className="text-lg font-semibold text-gray-900 ">Registration successful!</h3>
                    <p className="mt-2  text-gray-600">Your ID: {successId.registrationId}</p>
                </div>
            }
        </form >
    )
}

