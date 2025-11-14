export default function Benefits() {
  const benefits = [
    {
      title: "Save Time",
      description: "Reduce checkout time by 50% with our fast and intuitive interface.",
      stat: "50%",
      label: "Faster Checkout",
    },
    {
      title: "Reduce Errors",
      description: "Automatic calculations and barcode scanning eliminate manual entry mistakes.",
      stat: "99%",
      label: "Accuracy Rate",
    },
    {
      title: "Increase Sales",
      description: "Better inventory management and customer insights lead to more sales.",
      stat: "30%",
      label: "Sales Growth",
    },
    {
      title: "Happy Customers",
      description: "Faster service and loyalty programs keep customers coming back.",
      stat: "4.9/5",
      label: "Customer Rating",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Businesses Love Our POS System</h2>
          <p className="text-xl text-gray-600">Join hundreds of successful businesses already using our platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <div className="text-sm text-gray-500 mb-4">{benefit.label}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-gray-700 italic mb-4">
                This POS system transformed our business. We cut checkout time in half and our customers love how fast
                and smooth everything is now. Best investment we&apos;ve made&quot;
              </p>
              <div>
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-gray-600">Owner, Downtown Grocery Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
