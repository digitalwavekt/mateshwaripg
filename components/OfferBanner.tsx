"use client";

import { useState } from "react";
import { X } from "lucide-react";

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium">
          Special Offer: Get 20% off on monthly bookings! Use code STAY20
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;