const owners = [
  {
    name: "John Doe",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    description: "With 15 years of experience in hospitality management, John ensures the highest standards of service and comfort for all guests.",
  },
  {
    name: "Jane Smith",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    description: "Jane handles all guest relations and ensures that your stay is comfortable and memorable.",
  },
  {
    name: "John Doe",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    description: "With 15 years of experience in hospitality management, John ensures the highest standards of service and comfort for all guests.",
  }
];

const Owners = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Admin Staff</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {owners.map((owner, index) => (
          <div key={index} className="text-center">
            <div
              className="w-48 h-48 mx-auto rounded-full bg-cover bg-center mb-6"
              style={{ backgroundImage: `url(${owner.image})` }}
            />
            <h3 className="text-2xl font-semibold mb-2">{owner.name}</h3>
            <p className="text-primary mb-4">{owner.role}</p>
            <p className="text-gray-600">{owner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Owners;