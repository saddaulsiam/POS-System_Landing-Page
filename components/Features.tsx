export default function Features() {
  const features = [
    {
      icon: "🛒",
      title: "Fast Checkout",
      description: "Lightning-fast barcode scanning and intuitive interface for quick customer checkout.",
    },
    {
      icon: "📦",
      title: "Inventory Management",
      description: "Real-time stock tracking, low stock alerts, and automatic reorder notifications.",
    },
    {
      icon: "📊",
      title: "Sales Analytics",
      description: "Detailed reports and insights to help you make data-driven business decisions.",
    },
    {
      icon: "👥",
      title: "Customer Management",
      description: "Track customer purchases, loyalty programs, and personalized promotions.",
    },
    {
      icon: "💰",
      title: "Multiple Payment Methods",
      description: "Accept cash, cards, mobile payments, and split payments seamlessly.",
    },
    {
      icon: "👨‍💼",
      title: "Employee Management",
      description: "Role-based access, time tracking, and payroll integration for your team.",
    },
    {
      icon: "🧾",
      title: "Receipt Printing",
      description: "Professional receipts with your branding, both thermal and standard printing.",
    },
    {
      icon: "🔄",
      title: "Product Variants",
      description: "Manage products with multiple sizes, colors, and variations effortlessly.",
    },
    {
      icon: "📱",
      title: "Desktop & Web",
      description: "Works on desktop application and web browser for maximum flexibility.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our POS system includes all the features you need to manage sales, inventory, customers, and employees in
            one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
