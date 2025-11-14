"use client";

import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 59 : 69,
      period: isAnnual ? "/month (billed annually)" : "/month",
      description: "Perfect for small businesses just getting started",
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
      name: "Professional",
      price: isAnnual ? 119 : 139,
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

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-8">Choose the plan that's right for your business</p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                !isAnnual ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isAnnual ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Save 15%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular ? "border-2 border-blue-600 shadow-xl" : "border border-gray-200 shadow-md"
              } bg-white p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">All plans include a 60-day free trial. No credit card required.</p>
          <p>
            Need help choosing?{" "}
            <a href="#contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{" "}
            for a personalized recommendation.
          </p>
        </div>
      </div>
    </section>
  );
}
