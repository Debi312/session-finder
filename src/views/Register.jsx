export default function Register() {
    return (
        <form className="flex flex-col max-w-200 mx-auto gap-3 bg-white p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-center">Register </h2>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Your name"
                id="name"
                className="border p-2 rounded"
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="you@example.com"
                id="email"
                className="border p-2 rounded"
            />

            <label htmlFor="role">Role</label>
            <select
                id="role"
                className="border p-2 rounded"
            >
                <option value="">Select role</option>
                <option value="Student">Student</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
            </select>


            <button
                type="submit"
                className="bg-accent text-white py-2 rounded disabled:bg-gray-400 mt-6"
            >
                Register
            </button>


            <p className="text-green-600">Registration successful! ID: </p>

        </form>
    );
}

