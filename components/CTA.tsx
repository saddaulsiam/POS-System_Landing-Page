export default function CTA() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 shadow-2xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center p-8 text-white lg:p-12">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Get Started Today
              </h2>
              <p className="mb-8 text-lg text-blue-100 sm:text-xl">
                Join hundreds of successful businesses using SmartPOS. Start
                your free trial today.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">60-day free trial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Cancel anytime</span>
                </div>
              </div>

              <div className="border-t border-blue-400/30 pt-6">
                <p className="text-sm text-blue-200">
                  Trusted by 500+ businesses worldwide
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-8 lg:p-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Start Your Free Trial
              </h3>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Business Name
                  </label>
                  <input
                    id="business"
                    type="text"
                    placeholder="Your Business Name"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full transform rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                >
                  Get Started Free →
                </button>

                <p className="text-center text-xs text-gray-600">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
