import { HandHeart, GraduationCap, Utensils, HeartHandshake } from "lucide-react";

const ministries = [
  {
    icon: HandHeart,
    title: "Rescue Center",
    description: "Safe haven for vulnerable community members",
    bgClass: "from-orange-500 to-red-500",
    image: "/attached_assets/generated_images/Rescue_Center_Ministry_b109b3d9.png"
  },
  {
    icon: GraduationCap,
    title: "Kindergarten", 
    description: "Early education with Christian values",
    bgClass: "from-green-500 to-emerald-600",
    image: "/attached_assets/generated_images/Parish_Kindergarten_f48ff65b.png"
  },
  {
    icon: Utensils,
    title: "Food Relief",
    description: "Food distribution for families in need",
    bgClass: "from-amber-500 to-yellow-600",
    image: "/attached_assets/generated_images/Food_Relief_Program_2d08544f.png"
  },
  {
    icon: HeartHandshake,
    title: "Disability Support",
    description: "Support services for disabled community members", 
    bgClass: "from-blue-500 to-indigo-600",
    image: "/attached_assets/generated_images/Disability_Support_Services_0b935ce7.png"
  }
];

export default function Ministries() {
  return (
    <section id="ministries" className="py-16 bg-white relative overflow-hidden">
      {/* Animated church background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/attached_assets/generated_images/Rural_African_Church_d923e104.png')",
            animation: 'slowZoom 25s infinite'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Our Ministries</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving Kajiado County through diverse community programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${ministry.bgClass} rounded-xl p-6 text-white text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in group`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="relative mb-4">
                  <img 
                    src={ministry.image} 
                    alt={ministry.title}
                    className="w-full h-32 object-cover rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon size={32} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{ministry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}