import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Rescue Center Program",
    description: "Our rescue center provides safe accommodation, counseling, and rehabilitation services for vulnerable individuals and families. We offer temporary housing, meals, and support services while helping residents develop skills for independent living.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "24/7 Safe Accommodation",
      "Counseling Services", 
      "Skills Training Programs",
      "Medical Support"
    ],
    buttonText: "Learn More",
    buttonColor: "from-orange-500 to-red-500"
  },
  {
    title: "Parish Kindergarten",
    description: "Our kindergarten provides quality early childhood education with a foundation of Christian values. We prepare children for primary school while nurturing their spiritual, social, and academic development in a caring environment.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Qualified Teachers",
      "Christian Education",
      "School Readiness Program",
      "Nutritional Meals"
    ],
    buttonText: "Admission Info",
    buttonColor: "from-green-500 to-emerald-600"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to uplift and empower our Kajiado County community
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="text-green-600 mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={`bg-gradient-to-r ${program.buttonColor} hover:shadow-lg text-white px-6 py-2 transition-all duration-200 group`}>
                  {program.buttonText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}