const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Home Away From Home
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience comfortable living with our premium paying guest accommodations
          </p>
          <a
            href="#rooms"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;