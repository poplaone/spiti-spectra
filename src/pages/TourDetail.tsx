
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourPackage, { TourPackageProps } from "@/components/TourPackage";
import { tourPackagesData } from "@/components/TourPackages";
import { Bike, Car } from "lucide-react";

// Import refactored components
import ContactBar from "@/components/tour/ContactBar";
import TourHero from "@/components/tour/TourHero";
import BookingCard from "@/components/tour/BookingCard";
import TourOverview from "@/components/tour/TourOverview";
import TourItinerary from "@/components/tour/TourItinerary";
import TourAccommodation from "@/components/tour/TourAccommodation";
import TourInclusions from "@/components/tour/TourInclusions";
import RelatedTours from "@/components/tour/RelatedTours";
import MobileStickyFooter from "@/components/tour/MobileStickyFooter";

const TourDetail = () => {
  const { id } = useParams<{ id: string; }>();
  const [tour, setTour] = useState<TourPackageProps | null>(null);
  const [otherTours, setOtherTours] = useState<TourPackageProps[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("June");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const selectedTour = tourPackagesData.find((_, index) => index.toString() === id);
      if (selectedTour) {
        setTour(selectedTour);

        // Get other tours for the "More Popular Tours" section
        const others = tourPackagesData.filter((_, index) => index.toString() !== id).slice(0, 4); // Get up to 4 other tours
        setOtherTours(others);
      }
    }
  }, [id]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  // Choose the appropriate transport icon
  const getTransportIcon = () => {
    if (tour.transportType === 'bike') return <Bike className="text-spiti-blue w-6 h-6" />;
    if (tour.transportType === 'car') return <Car className="text-spiti-blue w-6 h-6" />;
    return <Car className="text-spiti-blue w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-spiti-cream">
      {/* Top contact bar */}
      <ContactBar />
      
      <Header />
      
      {/* Hero Section with Tour Title and Image */}
      <TourHero 
        tour={tour} 
        selectedMonth={selectedMonth} 
        setSelectedMonth={setSelectedMonth} 
        formatPrice={formatPrice} 
      />

      {/* Package Details Section */}
      <section className="py-16 bg-spiti-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Package details */}
            <div className="lg:col-span-2 space-y-8">
              <TourOverview tour={tour} getTransportIcon={getTransportIcon} />
              <TourItinerary tour={tour} />
              <TourAccommodation tour={tour} />
              <TourInclusions tour={tour} />
            </div>
            
            {/* Right column - Booking info */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <BookingCard 
                  originalPrice={tour.originalPrice}
                  discountedPrice={tour.discountedPrice}
                  discount={tour.discount}
                  formatPrice={formatPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Popular Tours Section */}
      <RelatedTours tours={otherTours} tourPackagesData={tourPackagesData} />
      
      {/* Mobile Sticky Footer */}
      <MobileStickyFooter />
      
      <Footer />
    </div>
  );
};

export default TourDetail;
