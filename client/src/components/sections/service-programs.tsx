import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, ArrowRight, Calendar, Users } from "lucide-react";

export default function ServicePrograms() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEuNSIgZmlsbD0iI0ZGNkEwMCIvPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-red-950 bg-clip-text text-transparent mb-4">Service Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Supporting families and students in Kajiado County through scholarships and relief programs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Scholarship Program */}
          <Card className="bg-white shadow-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Scholarship Program</h3>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
              alt="Students in Kajiado County" 
              className="w-full h-32 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide educational scholarships to deserving students from our parish community, helping them access primary, secondary, and higher education opportunities throughout Kajiado County and beyond.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                <div className="flex items-center mb-1">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Eligibility Criteria</h4>
                </div>
                <p className="text-sm text-gray-600">Parish members, academic merit, financial need assessment</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                <div className="flex items-center mb-1">
                  <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Application Period</h4>
                </div>
                <p className="text-sm text-gray-600">January - March annually</p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 font-semibold transition-all duration-200 group"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Apply for Scholarship
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Card>
          
          {/* Relief Distribution */}
          <Card className="bg-white shadow-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Food Relief Program</h3>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
              alt="Food Relief Distribution" 
              className="w-full h-32 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Regular distribution of food packages, clothing, and essential supplies to vulnerable families in our Maasai and local communities across Kajiado County.
            </p>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 mb-6 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="w-4 h-4 text-green-600 mr-2" />
                Distribution Schedule
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Suswa Church:</span>
                  <span>Every 2nd Saturday</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saikerri Church:</span>
                  <span>Every 3rd Saturday</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Enkorika Church:</span>
                  <span>Every 4th Saturday</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 font-semibold transition-all duration-200 group"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Check Eligibility
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}