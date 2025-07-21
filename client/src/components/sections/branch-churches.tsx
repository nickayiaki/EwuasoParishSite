import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const branches = [
  {
    name: "Suswa Church",
    description: "Our main church serving the Suswa community with daily masses and community programs.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    massTime: "Sunday Mass: 8:00 AM & 10:30 AM",
    location: "Central Suswa Location"
  },
  {
    name: "Saikerri Church", 
    description: "A vibrant community church known for its youth programs and agricultural initiatives.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    massTime: "Sunday Mass: 9:00 AM",
    location: "Saikerri Village"
  },
  {
    name: "Enkorika Church",
    description: "Our newest branch focusing on disability support services and inclusive worship.",
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    massTime: "Sunday Mass: 10:00 AM", 
    location: "Enkorika Community"
  }
];

export default function BranchChurches() {
  return (
    <section id="branches" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Branch Churches</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving three communities with the same dedication to faith and service
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden">
              <img 
                src={branch.image} 
                alt={branch.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                <p className="text-gray-600 mb-4">{branch.description}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-parish-blue mr-2" />
                    {branch.massTime}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-parish-blue mr-2" />
                    {branch.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
