import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart } from "lucide-react";

export default function ServicePrograms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Scholarship Program */}
          <Card className="bg-white shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-parish-blue rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Scholarship Program</h3>
            </div>
            <p className="text-gray-600 mb-6">
              We provide educational scholarships to deserving students from our parish community, helping them access primary, secondary, and higher education opportunities.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-parish-blue pl-4">
                <h4 className="font-semibold text-gray-900">Eligibility Criteria</h4>
                <p className="text-sm text-gray-600">Parish members, academic merit, financial need assessment</p>
              </div>
              <div className="border-l-4 border-parish-blue pl-4">
                <h4 className="font-semibold text-gray-900">Application Period</h4>
                <p className="text-sm text-gray-600">January - March annually</p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-parish-blue hover:bg-blue-700 text-white py-3 font-semibold transition-colors"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Apply for Scholarship
            </Button>
          </Card>
          
          {/* Relief Distribution */}
          <Card className="bg-white shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-parish-green rounded-full flex items-center justify-center mr-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Food Relief Program</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
              alt="Food Relief Distribution" 
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            
            <p className="text-gray-600 mb-6">
              Regular distribution of food packages, clothing, and essential supplies to vulnerable families in our community.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Distribution Schedule</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Suswa Church: Every 2nd Saturday</div>
                <div>Saikerri Church: Every 3rd Saturday</div>
                <div>Enkorika Church: Every 4th Saturday</div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-parish-green hover:bg-green-700 text-white py-3 font-semibold transition-colors"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Check Eligibility
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
