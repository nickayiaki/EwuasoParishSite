import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Phone } from "lucide-react";

const churches = [
  {
    name: "Suswa Church",
    location: "Suswa Town Center, Kajiado County",
    description: "Main parish church in central Suswa.",
    image: "/Images/Suswa.jpg",
    masseTimes: [
      { day: "Sunday", time: "7:00 AM & 10:00 AM", language: "English & Kiswahili" },
      { day: "Saturday", time: "6:00 PM", language: "English" },
      { day: "Weekdays", time: "6:30 AM", language: "Kiswahili" }
    ],
    contact: "+254 712 345 678",
    bgClass: "from-red-800 to-red-900"
  },
  {
    name: "Saikerri Church",
    location: "Saikerri Village, Kajiado County",
    description: "Serving Maasai families in Saikerri area.",
    image: "/Images/Saikerri.jpg",
    masseTimes: [
      { day: "Sunday", time: "8:00 AM", language: "Kiswahili & Maa" },
      { day: "Saturday", time: "5:30 PM", language: "Maa" },
      { day: "Wednesday", time: "6:00 PM", language: "Kiswahili" }
    ],
    contact: "+254 722 987 654",
    bgClass: "from-green-500 to-emerald-600"
  },
  {
    name: "Enkorika Church",
    location: "Enkorika Community, Kajiado County",
    description: "Newest branch serving Enkorika community.",
    image: "/Images/saikerri.jpg",
    masseTimes: [
      { day: "Sunday", time: "9:00 AM", language: "English & Maa" },
      { day: "Saturday", time: "6:30 PM", language: "English" },
      { day: "Friday", time: "6:00 PM", language: "Kiswahili" }
    ],
    contact: "+254 733 456 789",
    bgClass: "from-blue-500 to-indigo-600"
  }
];

export default function BranchChurches() {
  return (
    <section id="branches" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Animated church background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            animation: 'slowZoom 20s infinite'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-red-950 bg-clip-text text-transparent mb-4">Our Churches</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three vibrant church communities serving diverse populations across Kajiado County
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {churches.map((church, index) => (
            <Card key={index} className="bg-white shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={church.image} 
                  alt={church.name}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{church.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="text-red-900 mr-2 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-600 text-sm leading-relaxed">{church.location}</p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{church.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Clock className="text-red-900 mr-2" size={16} />
                    <h4 className="font-semibold text-gray-900">Mass Times</h4>
                  </div>
                  <div className="space-y-2">
                    {church.masseTimes.map((mass, massIndex) => (
                      <div key={massIndex} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-medium text-gray-900">{mass.day}</span>
                            <div className="text-red-900 font-semibold">{mass.time}</div>
                          </div>
                          <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">{mass.language}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-200">
                  <Phone className="text-green-600 mr-2" size={16} />
                  <span className="text-gray-700 font-medium">{church.contact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Special Services */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Special Services & Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <Users className="w-8 h-8 text-red-900 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Wedding Ceremonies</h4>
              <p className="text-gray-600 text-sm">Beautiful wedding ceremonies in traditional and modern styles</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Baptisms & Confirmations</h4>
              <p className="text-gray-600 text-sm">Welcoming new members into our faith community</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Community Gatherings</h4>
              <p className="text-gray-600 text-sm">Regular fellowship meetings and cultural celebrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}