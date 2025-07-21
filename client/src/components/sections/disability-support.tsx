import { Button } from "@/components/ui/button";

const supportServices = [
  {
    title: "Accessible Facilities",
    description: "All our churches feature wheelchair accessibility, accessible bathrooms, and designated seating areas.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Support Groups", 
    description: "Regular support group meetings for individuals with disabilities and their families, fostering community and mutual aid.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Equipment Assistance",
    description: "We provide wheelchairs, mobility aids, and assistive devices to community members who need them.",
    image: "https://images.unsplash.com/photo-1559757264-b7ee2da3d6b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function DisabilitySupport() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Disability Support Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating an inclusive community where everyone can participate fully in spiritual and social life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {supportServices.map((service, index) => (
            <div key={index} className="text-center">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-parish-teal rounded-lg p-8 text-white text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Need Support Services?</h3>
          <p className="mb-6">
            Our disability support coordinator is available to assess needs and connect you with appropriate resources and services.
          </p>
          <Button 
            className="bg-white text-parish-teal px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Support Coordinator
          </Button>
        </div>
      </div>
    </section>
  );
}
