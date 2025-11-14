export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8">Start your 60-day free trial today. No credit card required.</p>

        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Business Name"
            className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Free Trial
          </button>
        </form>

        <p className="mt-6 text-blue-200 text-sm">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </section>
  );
}
