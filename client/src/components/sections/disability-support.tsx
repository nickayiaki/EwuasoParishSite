import { Button } from "@/components/ui/button";
import { Accessibility, Heart, Users } from "lucide-react";

const supportServices = [
  {
    title: "Accessible Facilities",
    description: "All our churches feature wheelchair accessibility, accessible bathrooms, and designated seating areas.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: Accessibility
  },
  {
    title: "Support Groups", 
    description: "Regular support group meetings for individuals with disabilities and their families, fostering community and mutual aid.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: Users
  },
  {
    title: "Equipment Assistance",
    description: "We provide wheelchairs, mobility aids, and assistive devices to community members who need them.",
    image: "https://images.unsplash.com/photo-1559757264-b7ee2da3d6b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: Heart
  }
];

export default function DisabilitySupport() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yMCAwIDIwIDIwLTIwIDIwTDAgMjB6IiBmaWxsPSIjRkY2QTAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Disability Support Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating an inclusive community where everyone can participate fully in spiritual and social life in Kajiado County
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {supportServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center group transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg group-hover:shadow-2xl transition-shadow">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Heart size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4">Need Support Services?</h3>
          <p className="mb-6 text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Our disability support coordinator is available to assess needs and connect you with appropriate resources and services throughout our Kajiado County community.
          </p>
          <Button 
            className="bg-white text-blue-600 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Support Coordinator
          </Button>
        </div>
      </div>
    </section>
  );
}