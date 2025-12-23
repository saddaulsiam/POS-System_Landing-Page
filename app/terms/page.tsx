import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | POS System",
  description:
    "Terms of Service for POS System - Legal terms and conditions for using our application",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Last Updated: December 23, 2025
          </p>

          <div className="prose prose-blue max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700">
                These Terms of Service (&quot;Terms&quot;) constitute a legally
                binding agreement between you (&quot;User,&quot;
                &quot;you,&quot; or &quot;your&quot;) and POS System
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding
                your use of the POS System desktop application and related
                services (collectively, the &quot;Service&quot;).
              </p>
              <p className="text-gray-700">
                By downloading, installing, or using the Service, you agree to
                be bound by these Terms. If you do not agree to these Terms, you
                may not access or use the Service.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Eligibility
              </h2>
              <p className="text-gray-700">
                You must be at least 18 years old and have the legal capacity to
                enter into binding contracts to use this Service. By using the
                Service, you represent and warrant that you meet these
                requirements.
              </p>
              <p className="text-gray-700">
                If you are using the Service on behalf of a business or other
                entity, you represent that you have the authority to bind that
                entity to these Terms.
              </p>
            </section>

            {/* Account Registration */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. Account Registration and Security
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                3.1 Account Creation
              </h3>
              <p className="mb-4 text-gray-700">
                To use the Service, you must create an account by providing
                accurate, complete, and current information, including:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Full name and contact information</li>
                <li>Business/Store information</li>
                <li>Valid email address and phone number</li>
                <li>Secure username and PIN</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                3.2 Account Security
              </h3>
              <p className="mb-4 text-gray-700">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Use a strong, unique PIN</li>
                <li>Not share your account credentials with others</li>
                <li>
                  Notify us immediately of any unauthorized access or security
                  breach
                </li>
                <li>
                  Log out after each session, especially on shared devices
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                3.3 Account Termination
              </h3>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate your account at any
                time, with or without notice, for violating these Terms or
                engaging in fraudulent, abusive, or illegal activity.
              </p>
            </section>

            {/* Subscription and Payment */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Subscription and Payment
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.1 Free Trial
              </h3>
              <p className="mb-4 text-gray-700">
                New users receive a 10-day free trial. No payment information is
                required during the trial period. After the trial expires, you
                must subscribe to continue using the Service.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.2 Subscription Plans
              </h3>
              <p className="mb-4 text-gray-700">
                We offer the following subscription plans:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  <strong>Monthly Plan:</strong> $79 per month, billed monthly
                </li>
                <li>
                  <strong>Yearly Plan:</strong> $59 per month ($708 billed
                  annually), saving $240/year
                </li>
              </ul>
              <p className="text-gray-700">
                All prices are in USD and exclude applicable taxes unless
                otherwise stated.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.3 Payment Processing
              </h3>
              <p className="mb-4 text-gray-700">
                Payments are processed securely through SSL Commerz, our
                third-party payment gateway. By providing payment information,
                you authorize us to charge the applicable fees to your payment
                method.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.4 Auto-Renewal
              </h3>
              <p className="mb-4 text-gray-700">
                Subscriptions automatically renew at the end of each billing
                period unless canceled before the renewal date. You will be
                charged at the then-current subscription rate.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.5 Cancellation
              </h3>
              <p className="mb-4 text-gray-700">
                You may cancel your subscription at any time through the
                application settings. Cancellations take effect at the end of
                the current billing period. No refunds are provided for partial
                billing periods.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                4.6 Refund Policy
              </h3>
              <p className="text-gray-700">
                We offer a 7-day money-back guarantee for first-time
                subscribers. To request a refund, contact us at
                saddaulsiam@gmail.com within 7 days of your initial purchase.
                Refunds are not available for renewal payments.
              </p>
            </section>

            {/* Permitted Use */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Permitted Use and Restrictions
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                5.1 License Grant
              </h3>
              <p className="mb-4 text-gray-700">
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable, revocable license to
                download, install, and use the Service for your internal
                business purposes.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                5.2 Prohibited Activities
              </h3>
              <p className="mb-4 text-gray-700">You agree NOT to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  Reverse engineer, decompile, or disassemble the application
                </li>
                <li>Modify, adapt, or create derivative works</li>
                <li>Remove or alter any proprietary notices or labels</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>
                  Attempt to gain unauthorized access to our systems or networks
                </li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>
                  Use automated systems (bots, scrapers) to access the Service
                </li>
                <li>Resell, sublicense, or redistribute the Service</li>
                <li>Use the Service to transmit malware or harmful code</li>
                <li>
                  Violate any applicable laws, regulations, or third-party
                  rights
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Intellectual Property Rights
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                6.1 Our Property
              </h3>
              <p className="mb-4 text-gray-700">
                The Service and all content, features, and functionality
                (including but not limited to software, code, designs, logos,
                graphics, and trademarks) are owned by POS System and are
                protected by copyright, trademark, and other intellectual
                property laws.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                6.2 Your Data
              </h3>
              <p className="text-gray-700">
                You retain all rights to the data you input into the Service
                (products, customers, sales, etc.). By using the Service, you
                grant us a license to use, store, and process your data solely
                to provide the Service to you.
              </p>
            </section>

            {/* Data and Privacy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Data and Privacy
              </h2>
              <p className="text-gray-700">
                Your use of the Service is also governed by our Privacy Policy,
                which explains how we collect, use, and protect your
                information. By using the Service, you consent to our data
                practices as described in the Privacy Policy.
              </p>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Service Availability and Updates
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                8.1 Availability
              </h3>
              <p className="mb-4 text-gray-700">
                We strive to maintain 99.9% uptime but do not guarantee
                uninterrupted or error-free service. The Service may be
                unavailable due to maintenance, updates, or circumstances beyond
                our control.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                8.2 Updates and Modifications
              </h3>
              <p className="text-gray-700">
                We may update, modify, or discontinue features of the Service at
                any time. We will notify you of significant changes through the
                application or via email. Continued use of the Service after
                updates constitutes acceptance of the changes.
              </p>
            </section>

            {/* Support */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. Customer Support
              </h2>
              <p className="mb-4 text-gray-700">
                We provide 24/7 priority support through the following channels:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Email: saddaulsiam@gmail.com</li>
                <li>In-app chat support</li>
                <li>Phone support</li>
              </ul>
              <p className="text-gray-700">
                We aim to respond to support requests within 24 hours.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                10. Disclaimer of Warranties
              </h2>
              <p className="mb-4 text-gray-700">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, completeness, or reliability</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Security or freedom from viruses or harmful components</li>
              </ul>
              <p className="text-gray-700">
                We do not warrant that the Service will meet your requirements
                or that defects will be corrected.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                11. Limitation of Liability
              </h2>
              <p className="mb-4 text-gray-700">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL POS
                SYSTEM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                TO:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
              </ul>
              <p className="text-gray-700">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN
                THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                12. Indemnification
              </h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless POS System and
                its affiliates, officers, directors, employees, and agents from
                any claims, liabilities, damages, losses, and expenses
                (including reasonable attorneys&apos; fees) arising out of or
                related to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your data or content submitted through the Service</li>
              </ul>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                13. Dispute Resolution and Governing Law
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                13.1 Informal Resolution
              </h3>
              <p className="mb-4 text-gray-700">
                Before filing a claim, you agree to attempt to resolve the
                dispute informally by contacting us at saddaulsiam@gmail.com. We
                will attempt to resolve the dispute within 60 days.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                13.2 Governing Law
              </h3>
              <p className="mb-4 text-gray-700">
                These Terms shall be governed by and construed in accordance
                with the laws of Bangladesh, without regard to its conflict of
                law principles.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                13.3 Arbitration
              </h3>
              <p className="text-gray-700">
                Any disputes not resolved informally shall be resolved through
                binding arbitration in accordance with the rules of the
                Bangladesh Arbitration Act.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                14. Termination
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                14.1 By You
              </h3>
              <p className="mb-4 text-gray-700">
                You may terminate your account at any time through the
                application settings or by contacting us. Upon termination, your
                subscription will be canceled, and your data will be retained
                for 90 days before permanent deletion.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                14.2 By Us
              </h3>
              <p className="mb-4 text-gray-700">
                We may terminate or suspend your account immediately, without
                prior notice, if you:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Violate these Terms</li>
                <li>Fail to pay subscription fees</li>
                <li>Engage in fraudulent or illegal activity</li>
                <li>Pose a security or legal risk</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                14.3 Effect of Termination
              </h3>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will cease
                immediately. Provisions that by their nature should survive
                termination (including warranties, limitations of liability, and
                dispute resolution) will remain in effect.
              </p>
            </section>

            {/* General Provisions */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                15. General Provisions
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                15.1 Entire Agreement
              </h3>
              <p className="mb-4 text-gray-700">
                These Terms, together with our Privacy Policy, constitute the
                entire agreement between you and POS System regarding the
                Service.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                15.2 Amendments
              </h3>
              <p className="mb-4 text-gray-700">
                We reserve the right to modify these Terms at any time. We will
                notify you of material changes via email or through the
                application. Your continued use of the Service after changes
                constitutes acceptance of the revised Terms.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                15.3 Severability
              </h3>
              <p className="mb-4 text-gray-700">
                If any provision of these Terms is found to be unenforceable,
                the remaining provisions will remain in full force and effect.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                15.4 Waiver
              </h3>
              <p className="mb-4 text-gray-700">
                Our failure to enforce any right or provision of these Terms
                will not constitute a waiver of such right or provision.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                15.5 Assignment
              </h3>
              <p className="text-gray-700">
                You may not assign or transfer these Terms or your account
                without our prior written consent. We may assign these Terms
                without restriction.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                16. Contact Information
              </h2>
              <p className="mb-4 text-gray-700">
                If you have any questions about these Terms, please contact us:
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
                  By using POS System, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
