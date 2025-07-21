import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const programs = [
  {
    title: "Rescue Center Program",
    description: "Our rescue center provides safe accommodation, counseling, and rehabilitation services for vulnerable individuals and families. We offer temporary housing, meals, and support services while helping residents develop skills for independent living.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "24/7 Safe Accommodation",
      "Counseling Services", 
      "Skills Training Programs"
    ],
    buttonText: "Learn More",
    buttonColor: "bg-parish-blue hover:bg-blue-700"
  },
  {
    title: "Parish Kindergarten",
    description: "Our kindergarten provides quality early childhood education with a foundation of Christian values. We prepare children for primary school while nurturing their spiritual, social, and academic development in a caring environment.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Qualified Teachers",
      "Christian Education",
      "School Readiness Program"
    ],
    buttonText: "Admission Info",
    buttonColor: "bg-parish-green hover:bg-green-700"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 mb-4">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="text-parish-green mr-2" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={`${program.buttonColor} text-white px-6 py-2 transition-colors`}>
                  {program.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
