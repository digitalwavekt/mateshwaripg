"use client";

import Header from "@/components/Header";
import OfferBanner from "@/components/OfferBanner";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Owners from "@/components/Owners";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <OfferBanner />
      <Header />
      <div className="container mx-auto">
        <section id="home">
          <Hero />
        </section>
        <section id="rooms" className="py-16">
          <Rooms />
        </section>
        <section id="services" className="py-16 bg-gray-50">
          <Services />
        </section>
        <section id="owners" className="py-16">
          <Owners />
        </section>
        <section id="contact" className="py-16 bg-gray-50">
          <Contact />
        </section>
        <section id="map" className="py-16">
          <Map />
        </section>
      </div>
      <Footer />
    </main>
  );
}