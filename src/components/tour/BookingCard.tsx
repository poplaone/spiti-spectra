
import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sunrise, Mountain } from 'lucide-react';
import LeadForm from "@/components/LeadForm";

interface BookingCardProps {
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  formatPrice: (price: number) => string;
}

const BookingCard: React.FC<BookingCardProps> = ({ 
  originalPrice, 
  discountedPrice, 
  discount, 
  formatPrice 
}) => {
  return (
    <div className="hidden lg:block w-[400px]">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-heading font-bold text-center text-spiti-forest mb-4">Book This Tour</h2>
        
        <div className="mb-6">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-lg text-gray-700">Original Price:</span>
            <span className="text-lg line-through text-gray-500">₹{formatPrice(originalPrice)}/-</span>
          </div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-lg text-gray-700">Discount:</span>
            <span className="text-lg text-fuchsia-600">{discount}% OFF</span>
          </div>
          <div className="flex items-baseline justify-between border-t pt-2 mt-2">
            <span className="text-xl font-bold text-gray-900">You Pay:</span>
            <span className="text-2xl font-bold text-green-600">₹{formatPrice(discountedPrice)}/-</span>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">Per person on twin sharing</p>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center">
            <ShieldCheck className="text-green-500 w-5 h-5 mr-2" />
            <span className="text-sm">100% Secure Payments</span>
          </div>
          <div className="flex items-center">
            <Sunrise className="text-green-500 w-5 h-5 mr-2" />
            <span className="text-sm">Scenic Accommodations</span>
          </div>
          <div className="flex items-center">
            <Mountain className="text-green-500 w-5 h-5 mr-2" />
            <span className="text-sm">Expert Mountain Guides</span>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full mb-3 bg-green-500 hover:bg-green-600 text-lg py-6">
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <LeadForm />
          </DialogContent>
        </Dialog>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mb-4 text-lg py-6 text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500">
              Enquire Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <LeadForm />
          </DialogContent>
        </Dialog>
        
        <div className="text-center">
          <Link to="https://wa.me/919876543210" className="flex items-center justify-center text-green-600 hover:text-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
