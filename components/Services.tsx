import { Utensils, Wifi, Shield, Coffee, Clock, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Meals Provided",
    description: "Three nutritious meals daily with varied menu options",
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "High-Speed Internet",
    description: "24/7 high-speed Wi-Fi connectivity throughout the building",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security",
    description: "Round-the-clock security with CCTV surveillance",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Common Area",
    description: "Comfortable lounges and recreational spaces",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Timings",
    description: "No strict curfew with 24/7 access",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Housekeeping",
    description: "Regular cleaning and maintenance services",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;