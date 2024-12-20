import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-primary" />
              <p>+91-8764749125 , +91-9928496132 ,+91-9462788752</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <p>contact2mateshwaripg@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />
              <p>45 Mitra Nagar Khirni Phatak Jhotwara Jaipur</p>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                rows={4}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;