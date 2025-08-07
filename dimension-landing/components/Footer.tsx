export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
                <p className="text-gray-400 mb-6">Be the first to know when we launch.</p>

                <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-full rounded-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                        type="submit"
                        className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition"
                    >
                        Join
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-10">&copy; 2025 Dimension. All rights reserved.</p>
            </div>
        </footer>
    );
}
