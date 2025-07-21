import { Button } from "@/components/ui/button";
import { Sprout, Beef, TrendingUp, Users } from "lucide-react";

const projectStats = [
  { value: "25", label: "Acres Under Cultivation", color: "text-green-600", icon: Sprout },
  { value: "50", label: "Head of Cattle", color: "text-amber-600", icon: Beef },
  { value: "200", label: "Families Supported", color: "text-orange-600", icon: Users },
  { value: "30", label: "Active Volunteers", color: "text-blue-600", icon: TrendingUp }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white relative overflow-hidden">
      {/* Animated church background */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2ac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            animation: 'slowZoom 30s infinite'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Community Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Brother Vincent leads sustainable farming and livestock programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
                <Sprout size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Community Farm Project</h3>
                <p className="opacity-90">Sustainable Agriculture Initiative</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
              alt="Community Farm" 
              className="w-full h-32 object-cover rounded-lg mb-4 opacity-90"
            />
            <p className="mb-6 leading-relaxed">
              Producing vegetables and grains for rescue center and food relief programs. Teaching farming techniques to community.
            </p>
            <Button className="bg-white text-green-600 px-6 py-2 font-semibold hover:bg-gray-100 transition-colors group">
              View Progress
              <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm">
                <Beef size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Livestock Program</h3>
                <p className="opacity-90">Dairy & Beef Cattle Initiative</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
              alt="Livestock Program" 
              className="w-full h-32 object-cover rounded-lg mb-4 opacity-90"
            />
            <p className="mb-6 leading-relaxed">
              Brother Vincent's cattle project provides fresh milk for the kindergarten and rescue center while generating income for parish programs. We also distribute cattle to deserving families.
            </p>
            <Button className="bg-white text-amber-600 px-6 py-2 font-semibold hover:bg-gray-100 transition-colors group">
              Learn More
              <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
        </div>
        
        {/* Project Stats */}
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Impact in Numbers</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group transform hover:scale-105 transition-all duration-200">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Icon className={stat.color} size={24} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}