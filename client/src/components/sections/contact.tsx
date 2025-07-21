import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">We're here to serve you and answer any questions about our programs</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-parish-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Parish Office</h4>
                  <p className="text-gray-600">Ewuaso Parish, Suswa<br />P.O. Box 123, Kajiado County</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-parish-green rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                  <p className="text-gray-600">Father Mpete: +254 712 345 678<br />Parish Office: +254 722 987 654</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-parish-gold rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@ewuasoparish.org<br />fathermpete@ewuasoparish.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-parish-teal rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-parish-blue focus:border-transparent"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-2 focus:ring-parish-blue focus:border-transparent"
                  />
                </div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="focus:ring-2 focus:ring-parish-blue focus:border-transparent"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="focus:ring-2 focus:ring-parish-blue focus:border-transparent resize-none"
                />
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-parish-blue hover:bg-blue-700 text-white py-3 font-semibold transition-colors"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
