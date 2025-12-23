import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | POS System",
  description:
    "Privacy Policy for POS System - How we collect, use, and protect your data",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Last Updated: December 23, 2025
          </p>

          <div className="prose prose-blue max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Introduction
              </h2>
              <p className="text-gray-700">
                Welcome to POS System (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). We are committed to protecting your personal
                information and your right to privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our Point of Sale desktop application
                and related services.
              </p>
              <p className="text-gray-700">
                By using our application, you agree to the collection and use of
                information in accordance with this Privacy Policy. If you do
                not agree with our policies and practices, please do not use our
                application.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                2.1 Personal Information
              </h3>
              <p className="mb-4 text-gray-700">
                We collect personal information that you voluntarily provide to
                us when registering for the application, including:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Store/Business name and address</li>
                <li>Username and PIN</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                2.2 Business Data
              </h3>
              <p className="mb-4 text-gray-700">
                When you use our application, we collect and store
                business-related data, including:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Product inventory information</li>
                <li>Sales transactions and reports</li>
                <li>Customer profiles and loyalty program data</li>
                <li>Employee information and management data</li>
                <li>Supplier information and purchase orders</li>
                <li>Receipt customization settings</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                2.3 Payment Information
              </h3>
              <p className="mb-4 text-gray-700">
                For subscription payments, we use SSL Commerz as our payment
                gateway. Payment card information is collected and processed
                directly by SSL Commerz and is never stored on our servers. We
                only receive transaction confirmation data.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                2.4 Technical Data
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Device information and operating system</li>
                <li>Application version and update history</li>
                <li>Error logs and performance data</li>
                <li>IP address and connection information</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-700">
                We use the information we collect for the following purposes:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  <strong>Provide Services:</strong> To operate and maintain the
                  POS System application and its features
                </li>
                <li>
                  <strong>Account Management:</strong> To create and manage your
                  user account and subscription
                </li>
                <li>
                  <strong>Process Transactions:</strong> To process payments and
                  maintain transaction records
                </li>
                <li>
                  <strong>Customer Support:</strong> To respond to your
                  inquiries and provide technical support
                </li>
                <li>
                  <strong>Improve Services:</strong> To analyze usage patterns
                  and improve application features
                </li>
                <li>
                  <strong>Security:</strong> To detect, prevent, and address
                  technical issues and fraudulent activity
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable
                  laws and regulations
                </li>
                <li>
                  <strong>Communications:</strong> To send you updates,
                  notifications, and marketing materials (with your consent)
                </li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Data Storage and Security
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.1 Data Storage
              </h3>
              <p className="mb-4 text-gray-700">
                Your data is stored in secure cloud databases (PostgreSQL via
                Neon) hosted in trusted data centers. We maintain regular
                backups to prevent data loss.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.2 Security Measures
              </h3>
              <p className="mb-4 text-gray-700">
                We implement industry-standard security measures to protect your
                information, including:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>End-to-end encryption for data transmission (HTTPS/SSL)</li>
                <li>JWT-based authentication with refresh tokens</li>
                <li>Role-based access control (Cashier, Manager, Owner)</li>
                <li>Regular security audits and updates</li>
                <li>Secure password hashing (bcrypt)</li>
                <li>Audit logs for tracking system activities</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the Internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your information, we
                cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Data Sharing and Disclosure
              </h2>
              <p className="mb-4 text-gray-700">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                limited circumstances:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  <strong>Payment Processing:</strong> With SSL Commerz for
                  processing subscription payments
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  service providers who assist in operating our application
                  (hosting, analytics)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            {/* Your Rights and Choices */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Your Rights and Choices
              </h2>
              <p className="mb-4 text-gray-700">
                You have the following rights:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  <strong>Access:</strong> Request access to your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information through the profile settings
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account
                  and associated data
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data
                  in a structured format
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for data
                  processing at any time
                </li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us at
                saddaulsiam@gmail.com.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Data Retention
              </h2>
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to
                provide our services and comply with legal obligations. When you
                cancel your subscription, your data will be retained for 90 days
                before permanent deletion, unless required by law to retain
                longer. You may request immediate deletion by contacting us.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700">
                Our application is not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you believe we have collected information from a
                child, please contact us immediately.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. International Data Transfers
              </h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in
                countries other than your country of residence. We ensure
                appropriate safeguards are in place to protect your information
                in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Updates to Privacy Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                10. Updates to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date. We
                encourage you to review this Privacy Policy periodically for any
                changes.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                11. Contact Us
              </h2>
              <p className="mb-4 text-gray-700">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="rounded-lg bg-gray-50 p-6">
                <p className="mb-2 text-gray-700">
                  <strong>Email:</strong> saddaulsiam@gmail.com
                </p>
                <p className="mb-2 text-gray-700">
                  <strong>Developer:</strong> Saddaul Siam
                </p>
                <p className="text-gray-700">
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/saddaulsiam"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/saddaulsiam
                  </a>
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section>
              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-gray-900">
                  By using POS System, you acknowledge that you have read and
                  understood this Privacy Policy and agree to its terms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
