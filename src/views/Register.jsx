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
            setError("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto gap-3 bg-white p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-center">Register </h2>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Your name"
                id="name"
                className="border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
                placeholder="you@example.com"
                id="email"
                type="text"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="role">Role</label>
            <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-2 rounded"

            >
                <option value="">Select role</option>
                <option value="Student">Student</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>

            </select>

            {/* TODO : implement error in every input */}
            {error && <p className="text-red-600">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className={`bg-accent  text-white py-2 rounded disabled:bg-gray-400 mt-6 ${loading ? "cursor-not-allowed  hover:bg-gray-600" : "cursor-pointer"}`}
            >
                {loading ? "Submitting..." : "Submit Registration"}

            </button>



            {successId?.ok &&
                <div className="mt-8 bg-white p-8 rounded-xl border border-border text-center">
                    <h3 className="text-lg font-semibold text-gray-900 ">Registration successful!</h3>
                    <p className="mt-2  text-gray-600">Your ID: {successId.registrationId}</p>
                </div>
            }
        </form >
    )
}

