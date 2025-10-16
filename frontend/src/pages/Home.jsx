import React from 'react';
import { Phone, MapPin, ShoppingBag, Utensils, Clock, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Home = () => {
  const menuItems = [
    {
      category: 'Waazwan Specials',
      items: [
        { name: 'Waaza Chicken', price: 550, image: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85' },
        { name: 'Waaza Paneer', price: 350, image: 'https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85' },
        { name: 'Rogangosh', price: 500, image: 'https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85' },
        { name: 'Daniya Korma', price: 500, image: 'https://images.unsplash.com/photo-1545247181-516773cae754?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85' },
        { name: 'Aab Gosh', price: 300, image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85' },
        { name: 'Mirchi Korma', price: 450, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85' },
        { name: 'Rista (4 pcs)', price: 500 },
        { name: 'Rista (2 pcs)', price: 250 },
        { name: 'Gushtaab (4 pcs)', price: 500 },
        { name: 'Gushtaab (2 pcs)', price: 300 }
      ]
    },
    {
      category: 'Mutton Dishes',
      items: [
        { name: 'Mutton Kabaab', price: 250 },
        { name: 'Adhana Kabaab', price: 270 },
        { name: 'Kabaab Kanti', price: 300 },
        { name: 'Mutton Kanti', price: 350 },
        { name: 'Khadai Mutton (4 Pcs)', price: 450 },
        { name: 'Mutton Dupiyaza', price: 450 }
      ]
    }
  ];

  const storeCategories = [
    { name: 'Groceries', icon: ShoppingBag },
    { name: 'Snacks & Beverages', icon: ShoppingBag },
    { name: 'Personal Care', icon: ShoppingBag },
    { name: 'Cleaning Supplies', icon: ShoppingBag }
  ];

  const testimonials = [
    { name: 'Ahmed Khan', text: 'The most authentic Waazwan in Srinagar! The Rogangosh reminds me of my grandmother\'s cooking.', rating: 5 },
    { name: 'Priya Sharma', text: 'Excellent home delivery service. Fresh groceries and delicious food at my doorstep.', rating: 5 },
    { name: 'Faisal Dar', text: 'Best Rista and Gushtaab in town. The quality is consistent and the staff is very courteous.', rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="h-8 w-8 text-[#61525a]" />
              <h1 className="text-2xl font-bold text-[#1e1919]">Aroma Café & Fine Dine</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#menu" className="text-[#736c64] hover:text-[#61525a] transition-colors">Menu</a>
              <a href="#store" className="text-[#736c64] hover:text-[#61525a] transition-colors">Store</a>
              <a href="#about" className="text-[#736c64] hover:text-[#61525a] transition-colors">About</a>
              <a href="#contact" className="text-[#736c64] hover:text-[#61525a] transition-colors">Contact</a>
              <Button className="bg-[#61525a] hover:bg-[#4a3f44] text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#f7f5f2] py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-[#1e1919] leading-tight">
                Authentic Kashmiri Flavours
              </h2>
              <p className="text-xl text-[#736c64]">
                Traditional Waazwan & Daily Essentials Delivered to Your Doorstep
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#61525a] hover:bg-[#4a3f44] text-white">
                  <Utensils className="mr-2 h-5 w-5" />
                  Order Food
                </Button>
                <Button size="lg" variant="outline" className="border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Essentials
                </Button>
              </div>
              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#61525a]" />
                  <span className="text-[#1e1919] font-medium">9419429575</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#61525a]" />
                  <span className="text-[#1e1919] font-medium">7889480802</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85"
                alt="Traditional Kashmiri Cuisine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e1919] mb-4">Our Signature Menu</h2>
            <p className="text-lg text-[#736c64]">Authentic Kashmiri Waazwan prepared with traditional recipes</p>
          </div>

          <Tabs defaultValue="waazwan" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="waazwan">Waazwan Specials</TabsTrigger>
              <TabsTrigger value="mutton">Mutton Dishes</TabsTrigger>
            </TabsList>

            <TabsContent value="waazwan">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[0].items.map((item, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {item.image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-[#61525a]">₹{item.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mutton">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[1].items.map((item, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-[#61525a]">₹{item.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e1919] mb-4">Departmental Store</h2>
            <p className="text-lg text-[#736c64]">Daily essentials and groceries delivered fresh</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {storeCategories.map((category, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-[#61525a] rounded-full flex items-center justify-center">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1e1919] mb-6">About Us</h2>
            <p className="text-lg text-[#736c64] leading-relaxed mb-6">
              Aroma Café & Fine Dine is your one-stop destination for authentic Kashmiri cuisine and daily essentials in Shalimar, Srinagar. We blend traditional Kashmiri hospitality with modern convenience, offering home delivery of our signature Waazwan dishes and fresh groceries.
            </p>
            <p className="text-lg text-[#736c64] leading-relaxed">
              Our expert chefs use time-honored recipes and the finest ingredients to bring you the authentic taste of Kashmir. From our famous Rogangosh to our fresh departmental store offerings, we're committed to quality and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e1919] mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#fad24b] text-xl">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#736c64] italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e1919] mb-4">Visit or Order</h2>
            <p className="text-lg text-[#736c64]">We deliver across Shalimar and nearby areas</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#61525a]" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-[#736c64]">Skuast Road, Shalimar</p>
                <p className="text-[#736c64]">Srinagar, Jammu and Kashmir 190025</p>
                <Button variant="outline" className="mt-4 border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white">
                  View on Map
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#61525a]" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#61525a]" />
                  <span className="text-[#736c64]">9419429575</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#61525a]" />
                  <span className="text-[#736c64]">7889480802</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#61525a]" />
                  <span className="text-[#736c64] text-sm">javeedaslamjaveednahami@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#61525a]" />
                  <span className="text-[#736c64]">Open Daily: 10 AM - 10 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1919] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Utensils className="h-6 w-6" />
                Aroma Café & Fine Dine
              </h3>
              <p className="text-[#bbb5ae]">Authentic Kashmiri cuisine and daily essentials at your doorstep.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-[#bbb5ae] hover:text-white transition-colors">Menu</a></li>
                <li><a href="#store" className="text-[#bbb5ae] hover:text-white transition-colors">Store</a></li>
                <li><a href="#about" className="text-[#bbb5ae] hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-[#bbb5ae] hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-[#bbb5ae]">
                <li>Phone: 9419429575, 7889480802</li>
                <li>Skuast Road, Shalimar</li>
                <li>Srinagar, J&K 190025</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-[#bbb5ae]">
            <p>&copy; 2024 Aroma Café & Fine Dine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;