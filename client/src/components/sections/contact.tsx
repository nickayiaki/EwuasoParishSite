import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yMCAwIDIwIDIwLTIwIDIwTDAgMjB6IiBmaWxsPSIjRkY2QTAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">We're here to serve you and answer any questions about our programs in Kajiado County</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start transform hover:scale-105 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Parish Office</h4>
                  <p className="text-gray-600 leading-relaxed">Ewuaso Parish, Suswa<br />P.O. Box 123, Kajiado County, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:scale-105 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Phone Numbers</h4>
                  <p className="text-gray-600 leading-relaxed">Father Mpete: +254 712 345 678<br />Parish Office: +254 722 987 654</p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:scale-105 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Email</h4>
                  <p className="text-gray-600 leading-relaxed">info@ewuasoparish.org<br />fathermpete@ewuasoparish.org</p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:scale-105 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Office Hours</h4>
                  <p className="text-gray-600 leading-relaxed">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 border border-orange-200">
              <h4 className="font-semibold text-gray-900 mb-2">Visit Us in Kajiado County</h4>
              <p className="text-gray-600 text-sm">Located in the heart of Suswa, serving the Maasai and local communities with three branch churches across the region.</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-gray-50 to-orange-50 shadow-xl animate-fade-in" style={{animationDelay: '200ms'}}>
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:shadow-md"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:shadow-md"
                  />
                </div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:shadow-md"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all duration-200 hover:shadow-md"
                />
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 font-semibold transition-all duration-200 transform hover:scale-105 group"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  {!contactMutation.isPending && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}