import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Sprout, GraduationCap, Heart } from "lucide-react";

const events = [
  {
    title: "Christmas Celebration",
    date: "December 25, 2024",
    description: "Join us for our annual Christmas celebration with special masses at all three churches in Kajiado County.",
    location: "All Churches • 8:00 AM - 12:00 PM",
    icon: Calendar,
    bgClass: "from-red-500 to-red-900",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Farm Training Workshop", 
    date: "January 15, 2025",
    description: "Brother Vincent will lead a workshop on sustainable farming techniques for community members.",
    location: "Parish Farm • 9:00 AM - 4:00 PM",
    icon: Sprout,
    bgClass: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Scholarship Applications",
    date: "January 1 - March 31",
    description: "Scholarship application period opens for the 2025 academic year.",
    location: "Online & Parish Office",
    icon: GraduationCap,
    bgClass: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Community Health Outreach",
    date: "February 10, 2025",
    description: "Free medical checkups and health education for families in our communities.",
    location: "Suswa Church • 8:00 AM - 4:00 PM",
    icon: Heart,
    bgClass: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  }
];

export default function EventsCalendar() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNGRjZBMDAiIGZpbGwtb3BhY2l0eT0iMC4zIi8+PC9nPjwvc3ZnPg==')] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-red-950 bg-clip-text text-transparent mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600">Stay connected with parish activities and special celebrations in our Kajiado County community</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card key={index} className="bg-white shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in group" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.bgClass} opacity-80`}></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{event.title}</h3>
                  </div>
                  <p className="text-sm text-red-900 font-semibold mb-3">{event.date}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${event.bgClass} bg-clip-text text-transparent`}>
                    {event.location}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}