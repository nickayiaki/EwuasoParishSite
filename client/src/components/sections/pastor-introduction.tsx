import { Button } from "@/components/ui/button";
import { Facebook, Mail } from "lucide-react";

export default function PastorIntroduction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Father Mpete" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Father Mpete</h2>
            <p className="text-lg text-gray-700 mb-6">
              Father Mpete has been serving the Ewuaso Parish community for over 15 years, bringing hope and spiritual guidance to our three branch churches. His dedication to community service and social justice has transformed countless lives through our various ministry programs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Under his leadership, we have established rescue centers, educational programs, and relief initiatives that serve the most vulnerable in our community. Father Mpete believes in the power of faith to create positive change and works tirelessly to ensure every person feels welcomed and valued.
            </p>
            <div className="flex items-center space-x-4">
              <Button className="bg-parish-blue hover:bg-blue-700 text-white px-6 py-2">
                Read More
              </Button>
              <div className="flex space-x-2">
                <a href="#" className="text-parish-blue hover:text-blue-700">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-parish-blue hover:text-blue-700">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
