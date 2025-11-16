"use client";

import { useRef, useState } from "react";

import PricingToggle from "../client/PricingToggle";
import AnimatedSection from "../ui/AnimatedSection";
import Modal from "../ui/Modal";

type ModalType = "trial" | "contact" | null;

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [modal, setModal] = useState<ModalType>(null);
  // Form states
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const contactEmailRef = useRef<HTMLInputElement>(null);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "All the essentials for small shops and new businesses.",
      features: [
        "Up to 3 users",
        "Unlimited products",
        "Basic reports",
        "Email support",
        "Receipt printing",
        "Inventory management",
        "Customer management",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Standard",
      price: isAnnual ? 59 : 79,
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "For growing businesses that need more power",
      features: [
        "Unlimited users",
        "Unlimited products",
        "Advanced analytics",
        "Priority support",
        "Product variants",
        "Employee management",
        "Loyalty programs",
        "Parked sales",
        "Custom receipts",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large businesses with custom needs",
      features: [
        "Everything in Professional",
        "Multiple locations",
        "Custom integrations",
        "Dedicated account manager",
        "On-site training",
        "Custom development",
        "SLA guarantee",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  // Email validation
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Handle contact form submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setError("Please fill in all fields.");
      return;
    }
    if (!validateEmail(contactForm.email)) {
      setError("Please enter a valid email address.");
      contactEmailRef.current?.focus();
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  // Reset modal state
  const closeModal = () => {
    setModal(null);
    setTimeout(() => {
      setContactForm({ name: "", email: "", message: "" });
      setLoading(false);
      setSuccess(false);
      setError("");
    }, 300);
  };

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 to-indigo-50/20"></div>
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-indigo-200/10 blur-3xl"></div>

      <div className="max-w-8xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Pricing
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Choose the plan that&apos;s right for your business. All plans
            include a 60-day free trial.
          </p>

          {/* Toggle */}
          <PricingToggle onToggle={setIsAnnual} />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              className={`group relative rounded-2xl bg-white p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-xl shadow-blue-100/50 hover:-translate-y-2 hover:shadow-2xl"
                  : "border border-gray-200 shadow-md hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2 text-sm font-bold text-white shadow-lg">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mb-4 text-gray-600">{plan.description}</p>
                <div className="mb-2">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-4 w-4 text-green-600"
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Only Starter plan offers free trial, but now it scrolls to #contact */}
              {plan.name === "Starter" ? (
                <a
                  href="#contact"
                  className={`block w-full rounded-xl px-6 py-3.5 text-center font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:scale-105 hover:bg-gray-200"
                  }`}
                >
                  Start Free Trial
                </a>
              ) : plan.cta === "Contact Sales" ? (
                <button
                  type="button"
                  onClick={() => setModal("contact")}
                  className={`block w-full rounded-xl px-6 py-3.5 text-center font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:scale-105 hover:bg-gray-200"
                  }`}
                >
                  Contact Sales
                </button>
              ) : (
                <button
                  type="button"
                  // Replace with your purchase logic or link
                  className={`block w-full rounded-xl px-6 py-3.5 text-center font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:scale-105 hover:bg-gray-200"
                  }`}
                  disabled
                >
                  Purchase
                </button>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
      {/* Secure checkout note */}
      <div className="mt-12 flex flex-col items-center">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <svg
            className="h-4 w-4 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4"
            />
          </svg>
          100% Secure Checkout — SSL Encrypted
        </div>
      </div>

      {/* Contact Modal */}
      <Modal
        open={modal === "contact"}
        onClose={closeModal}
        title="Contact Sales"
      >
        {success ? (
          <div className="flex flex-col items-center justify-center py-8">
            <svg
              className="mb-4 h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="mb-2 text-lg font-semibold text-green-700">
              Message Sent!
            </div>
            <div className="mb-4 text-gray-600">
              Our team will contact you soon.
            </div>
            <button
              onClick={closeModal}
              className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded border px-3 py-2"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm((f) => ({ ...f, name: e.target.value }))
              }
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded border px-3 py-2"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm((f) => ({ ...f, email: e.target.value }))
              }
              ref={contactEmailRef}
              disabled={loading}
            />
            <textarea
              placeholder="Your Message"
              className="w-full rounded border px-3 py-2"
              rows={3}
              value={contactForm.message}
              onChange={(e) =>
                setContactForm((f) => ({ ...f, message: e.target.value }))
              }
              disabled={loading}
            ></textarea>
            {error && <div className="text-sm text-red-600">{error}</div>}
            <button
              type="submit"
              className="w-full rounded bg-blue-600 py-2 font-bold text-white hover:bg-blue-700 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </Modal>
    </section>
  );
}
