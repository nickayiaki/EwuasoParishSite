import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Home, ArrowRight, CreditCard, Smartphone } from "lucide-react";

const donationOptions = [
  {
    title: "Monthly Supporter",
    amount: "KSh 1,000/month",
    description: "Support our ongoing programs with monthly contributions",
    icon: Heart,
    bgClass: "from-red-500 to-pink-600",
    popular: false
  },
  {
    title: "Program Sponsor",
    amount: "KSh 5,000",
    description: "Sponsor a specific program like kindergarten or rescue center",
    icon: Users,
    bgClass: "from-blue-500 to-indigo-600",
    popular: true
  },
  {
    title: "Student Scholarship",
    amount: "KSh 10,000",
    description: "Provide a full year scholarship for a deserving student",
    icon: GraduationCap,
    bgClass: "from-green-500 to-emerald-600",
    popular: false
  },
  {
    title: "Family Relief",
    amount: "KSh 2,500",
    description: "Provide food and essentials for a family in need",
    icon: Home,
    bgClass: "from-red-800 to-amber-600",
    popular: false
  }
];

const paymentMethods = [
  {
    name: "M-Pesa",
    description: "Send to: 0712 345 678 (Ewuaso Parish)",
    icon: Smartphone,
    color: "text-green-600"
  },
  {
    name: "Bank Transfer",
    description: "Equity Bank: AC 1234567890",
    icon: CreditCard,
    color: "text-blue-600"
  }
];

export default function Donation() {
  const handleDonate = (amount: string) => {
    // In a real implementation, this would integrate with payment processors
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjMiIGZpbGw9IiNGRjZBMDAiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9nPjwvc3ZnPg==')] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-red-950 bg-clip-text text-transparent mb-4">Support Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your donations help us continue serving the Kajiado County community through our various programs and initiatives
          </p>
        </div>
        
        {/* Hero donation image */}
        <div className="mb-12 relative">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt="Community support in Kajiado County" 
            className="w-full h-64 object-cover rounded-xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-start px-8">
            <div className="text-white max-w-lg">
              <h3 className="text-3xl font-bold mb-4">Make a Difference Today</h3>
              <p className="text-lg opacity-90">Every donation directly impacts families, students, and individuals in our Maasai and local communities</p>
            </div>
          </div>
        </div>
        
        {/* Donation Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card 
                key={index} 
                className={`bg-white shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in relative ${option.popular ? 'ring-2 ring-red-800' : ''}`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-red-800 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className={`bg-gradient-to-br ${option.bgClass} p-6 text-white text-center`}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <div className="text-2xl font-bold">{option.amount}</div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">{option.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white transition-all duration-200 group"
                    onClick={() => handleDonate(option.amount)}
                  >
                    Donate Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Payment Methods */}
        <div className="bg-white rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">How to Donate</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="flex items-center p-6 bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg border border-orange-200 transform hover:scale-105 transition-all duration-200">
                  <div className={`w-12 h-12 ${method.color} bg-gray-100 rounded-full flex items-center justify-center mr-4`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{method.name}</h4>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              For other donation methods or questions about giving, please contact us directly.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 transition-all duration-200 group"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us About Donations
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
        </div>
        
        {/* Impact Statement */}
        <div className="mt-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-8 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Your Impact</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Thanks to generous donors like you, we've been able to serve over 200 families, provide scholarships to 50+ students, 
            and maintain vital community programs throughout Kajiado County. Every donation makes a real difference in someone's life.
          </p>
        </div>
      </div>
    </section>
  );
}