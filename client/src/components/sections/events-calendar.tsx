import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Sprout, GraduationCap } from "lucide-react";

const events = [
  {
    title: "Christmas Celebration",
    date: "December 25, 2024",
    description: "Join us for our annual Christmas celebration with special masses at all three churches.",
    location: "All Churches • 8:00 AM - 12:00 PM",
    icon: Calendar,
    bgClass: "bg-parish-blue"
  },
  {
    title: "Farm Training Workshop", 
    date: "January 15, 2025",
    description: "Brother Vincent will lead a workshop on sustainable farming techniques for community members.",
    location: "Parish Farm • 9:00 AM - 4:00 PM",
    icon: Sprout,
    bgClass: "bg-parish-green"
  },
  {
    title: "Scholarship Applications",
    date: "January 1 - March 31",
    description: "Scholarship application period opens for the 2025 academic year.",
    location: "Online & Parish Office",
    icon: GraduationCap,
    bgClass: "bg-parish-gold"
  }
];

export default function EventsCalendar() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600">Stay connected with parish activities and special celebrations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${event.bgClass} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className={`text-sm font-semibold ${event.bgClass.replace('bg-', 'text-')}`}>
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
