import { getLatestRelease } from "@/app/actions/getLatestRelease";

export default async function Download() {
  const { version, downloadUrl, fileSize } = await getLatestRelease();

  return (
    <section
      id="download"
      className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 h-72 w-72 animate-pulse rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 h-96 w-96 animate-pulse rounded-full bg-indigo-400 blur-3xl delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-block rounded-full border border-blue-400/50 bg-blue-500/30 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white">
              ⚡ Latest Version: {version}
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-blue-100">
            Download our powerful POS system now and start managing your sales,
            inventory, and customers with ease. In-app purchase options
            available for advanced features.
          </p>

          {/* Download Button */}
          <div className="mb-12 flex flex-col items-center gap-4">
            <a
              href={downloadUrl}
              className="group hover:shadow-3xl inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-blue-700 shadow-2xl transition-all hover:scale-105 hover:bg-blue-50"
              download
            >
              Download for Windows
              <svg
                className="h-6 w-6 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
            <p className="text-sm text-blue-200">
              Compatible with Windows 10 and above • {fileSize}
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 flex justify-center">
                <svg
                  className="h-10 w-10 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-white">Fast Setup</h3>
              <p className="text-sm text-blue-100">
                Install in minutes and start selling immediately
              </p>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 flex justify-center">
                <svg
                  className="h-10 w-10 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Secure & Reliable
              </h3>
              <p className="text-sm text-blue-100">
                Bank-level encryption for your business data
              </p>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 flex justify-center">
                <svg
                  className="h-10 w-10 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-white">Auto Updates</h3>
              <p className="text-sm text-blue-100">
                Always get the latest features automatically
              </p>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-3 flex justify-center">
                <svg
                  className="h-10 w-10 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-white">In-App Purchase</h3>
              <p className="text-sm text-blue-100">
                Unlock premium features when you need them
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute right-0 bottom-0 left-0 h-[120px] leading-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
