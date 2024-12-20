import { Bed, Users, Wifi, Bath } from "lucide-react";

const rooms = [
  {
    title: "Standard Single Room",
    price: "$299/month",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3",
    features: ["Single Bed", "Shared Bathroom", "Wi-Fi", "Study Table"],
  },
  {
    title: "Deluxe Double Room",
    price: "$499/month",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3",
    features: ["Double Bed", "Private Bathroom", "Wi-Fi", "Balcony"],
  },
  {
    title: "Premium Suite",
    price: "$699/month",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3",
    features: ["King Bed", "En-suite Bathroom", "Wi-Fi", "Living Area"],
  },
];

const Rooms = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${room.image})` }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
              <p className="text-xl text-primary mb-4">{room.price}</p>
              <ul className="space-y-2">
                {room.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {idx === 0 && <Bed size={20} />}
                    {idx === 1 && <Bath size={20} />}
                    {idx === 2 && <Wifi size={20} />}
                    {idx === 3 && <Users size={20} />}
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;