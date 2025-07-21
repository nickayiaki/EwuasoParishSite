import { Button } from "@/components/ui/button";
import { Sprout, Beef } from "lucide-react";

const projectStats = [
  { value: "25", label: "Acres Under Cultivation", color: "text-parish-blue" },
  { value: "50", label: "Head of Cattle", color: "text-parish-green" },
  { value: "200", label: "Families Supported", color: "text-parish-gold" },
  { value: "30", label: "Active Volunteers", color: "text-parish-teal" }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Brother Vincent leads our sustainable development initiatives that strengthen community self-reliance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-parish-green to-green-600 rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Sprout size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Community Farm Project</h3>
                <p className="opacity-90">Sustainable Agriculture Initiative</p>
              </div>
            </div>
            <p className="mb-6">
              Our community farm produces vegetables and grains that feed rescue center residents and support food relief programs. We teach modern farming techniques and provide seeds to community members.
            </p>
            <Button className="bg-white text-parish-green px-6 py-2 font-semibold hover:bg-gray-100 transition-colors">
              View Progress
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-parish-gold to-amber-600 rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Beef size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Livestock Program</h3>
                <p className="opacity-90">Dairy & Beef Cattle Initiative</p>
              </div>
            </div>
            <p className="mb-6">
              Brother Vincent's cattle project provides fresh milk for the kindergarten and rescue center while generating income for parish programs. We also distribute cattle to deserving families.
            </p>
            <Button className="bg-white text-parish-gold px-6 py-2 font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Project Stats */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {projectStats.map((stat, index) => (
              <div key={index}>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
