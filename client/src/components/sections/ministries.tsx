import { HandHeart, GraduationCap, Utensils, HeartHandshake } from "lucide-react";

const ministries = [
  {
    icon: HandHeart,
    title: "Rescue Center",
    description: "Providing safe haven and rehabilitation for vulnerable community members",
    bgClass: "from-parish-blue to-blue-600"
  },
  {
    icon: GraduationCap,
    title: "Kindergarten", 
    description: "Early childhood education with Christian values and academic excellence",
    bgClass: "from-parish-green to-green-600"
  },
  {
    icon: Utensils,
    title: "Food Relief",
    description: "Regular food distribution programs for families in need",
    bgClass: "from-parish-gold to-amber-600"
  },
  {
    icon: HeartHandshake,
    title: "Disability Support",
    description: "Comprehensive support services for community members with disabilities", 
    bgClass: "from-parish-teal to-teal-600"
  }
];

export default function Ministries() {
  return (
    <section id="ministries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministries</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving our community through diverse programs that address physical, spiritual, and educational needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${ministry.bgClass} rounded-lg p-6 text-white text-center`}>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
                <p className="text-sm opacity-90">{ministry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
