import React, { useState } from 'react';
import { Phone, MapPin, ShoppingBag, Utensils, Clock, Mail, Menu, X, ShoppingCart, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';
import { toast } from 'sonner';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { addToCart, setIsCartOpen, getCartCount } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  const menuItems = [
    {
      category: 'Biryani & Rice',
      items: [
        { id: 'br1', name: 'Veg Biryani (Half)', price: 90, image: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'br2', name: 'Veg Biryani (Full)', price: 180, image: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'br3', name: 'Chicken Biryani (Half)', price: 120, type: 'food' },
        { id: 'br4', name: 'Chicken Biryani (Full)', price: 220, type: 'food' },
        { id: 'br5', name: 'Mutton Biryani', price: 300, image: 'https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'br6', name: 'Mutton Kabab Biryani', price: 350, type: 'food' },
        { id: 'br7', name: 'Veg Fried Rice (Half)', price: 130, type: 'food' },
        { id: 'br8', name: 'Veg Fried Rice (Full)', price: 250, type: 'food' },
        { id: 'br9', name: 'Chicken Fried Rice (Half)', price: 180, type: 'food' },
        { id: 'br10', name: 'Chicken Fried Rice (Full)', price: 320, type: 'food' },
        { id: 'br11', name: 'Egg Fried Rice', price: 210, type: 'food' },
        { id: 'br12', name: 'Lamb Fried Rice', price: 300, type: 'food' },
        { id: 'br13', name: 'Beef Fried Rice', price: 250, type: 'food' },
        { id: 'br14', name: 'Basmati Rice', price: 100, type: 'food' },
        { id: 'br15', name: 'Zeera Rice', price: 120, type: 'food' },
        { id: 'br16', name: 'Butter Rice', price: 130, type: 'food' },
        { id: 'br17', name: 'Peas Pullow', price: 250, type: 'food' },
        { id: 'br18', name: 'Chicken Pullow', price: 300, type: 'food' },
        { id: 'br19', name: 'Mutton Pullow', price: 400, type: 'food' }
      ]
    },
    {
      category: 'Indian Non-Veg',
      items: [
        { id: 'inv1', name: 'Butter Chicken (Half)', price: 350, image: 'https://images.unsplash.com/photo-1545247181-516773cae754?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'inv2', name: 'Butter Chicken (Full)', price: 650, image: 'https://images.unsplash.com/photo-1545247181-516773cae754?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'inv3', name: 'Khadaai Chicken (Half)', price: 350, type: 'food' },
        { id: 'inv4', name: 'Khadaai Chicken (Full)', price: 650, type: 'food' },
        { id: 'inv5', name: 'Chicken Curry (Half)', price: 350, type: 'food' },
        { id: 'inv6', name: 'Chicken Curry (Full)', price: 650, type: 'food' },
        { id: 'inv7', name: 'Chicken Korma (Half)', price: 350, type: 'food' },
        { id: 'inv8', name: 'Chicken Korma (Full)', price: 650, type: 'food' },
        { id: 'inv9', name: 'Chicken Tikka Masala', price: 400, type: 'food' },
        { id: 'inv10', name: 'Chicken Butter Masala', price: 420, type: 'food' },
        { id: 'inv11', name: 'Rogan Gosh Chicken (Half)', price: 350, type: 'food' },
        { id: 'inv12', name: 'Rogan Gosh Chicken (Full)', price: 650, type: 'food' },
        { id: 'inv13', name: 'Chicken Daniya Korma (Half)', price: 400, type: 'food' },
        { id: 'inv14', name: 'Chicken Daniya Korma (Full)', price: 670, type: 'food' },
        { id: 'inv15', name: 'Punjabi Chicken', price: 500, type: 'food' },
        { id: 'inv16', name: 'Mutton Keema', price: 450, type: 'food' },
        { id: 'inv17', name: 'Meethi Korma', price: 450, type: 'food' },
        { id: 'inv18', name: 'Khadaii Gosh (4 Pcs)', price: 550, type: 'food' }
      ]
    },
    {
      category: 'Chinese',
      items: [
        { id: 'ch1', name: 'Chilly Chicken (Half)', price: 350, image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'ch2', name: 'Chilly Chicken (Full)', price: 650, image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'ch3', name: 'Ginger Chicken (Half)', price: 350, type: 'food' },
        { id: 'ch4', name: 'Ginger Chicken (Full)', price: 650, type: 'food' },
        { id: 'ch5', name: 'Chicken Manchurian (Half)', price: 350, type: 'food' },
        { id: 'ch6', name: 'Chicken Manchurian (Full)', price: 650, type: 'food' },
        { id: 'ch7', name: 'Lemon Chicken (Half)', price: 350, type: 'food' },
        { id: 'ch8', name: 'Lemon Chicken (Full)', price: 650, type: 'food' },
        { id: 'ch9', name: 'Chicken American Chopsii', price: 320, type: 'food' },
        { id: 'ch10', name: 'Veg Chopsii', price: 250, type: 'food' },
        { id: 'ch11', name: 'Schezwan Chicken', price: 350, type: 'food' },
        { id: 'ch12', name: 'Chicken Chowmin (Half)', price: 130, type: 'food' },
        { id: 'ch13', name: 'Chicken Chowmin (Full)', price: 250, type: 'food' },
        { id: 'ch14', name: 'Veg Chowmin (Half)', price: 100, type: 'food' },
        { id: 'ch15', name: 'Veg Chowmin (Full)', price: 190, type: 'food' }
      ]
    },
    {
      category: 'Starters & Appetizers',
      items: [
        { id: 'st1', name: 'Honey Chilly Potato', price: 300, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'st2', name: 'Chilly Paneer', price: 280, type: 'food' },
        { id: 'st3', name: 'Ajwan Seek Kabaab', price: 250, type: 'food' },
        { id: 'st4', name: 'Chicken Nuggets', price: 300, type: 'food' },
        { id: 'st5', name: 'Chicken Pop Corn Bites', price: 300, type: 'food' },
        { id: 'st6', name: 'Punjabi Masala Chicken Tikka', price: 300, type: 'food' },
        { id: 'st7', name: 'Chicken Ajwan Fingers', price: 300, type: 'food' },
        { id: 'st8', name: 'Mustard Chilly Wings', price: 300, type: 'food' },
        { id: 'st9', name: 'Chicken 65', price: 300, type: 'food' },
        { id: 'st10', name: 'Spicy Roast Chicken', price: 300, type: 'food' }
      ]
    },
    {
      category: 'Vegetarian',
      items: [
        { id: 'veg1', name: 'Paneer Makhni', price: 250, image: 'https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85', type: 'food' },
        { id: 'veg2', name: 'Khadaii Paneer', price: 220, type: 'food' },
        { id: 'veg3', name: 'Paneer Tikka Masala', price: 320, type: 'food' },
        { id: 'veg4', name: 'Veg Pullow', price: 250, type: 'food' }
      ]
    },
    {
      category: 'Chef Specials',
      items: [
        { id: 'sp1', name: 'Chef Surprise', price: 600, type: 'food' }
      ]
    }
  ];

  const storeProducts = [
    {
      category: 'Chips & Snacks',
      items: [
        { id: 's1', name: 'Lays Magic Masala', price: 20, category: 'Chips & Snacks' },
        { id: 's2', name: 'Kurkure Masala Munch', price: 20, category: 'Chips & Snacks' },
        { id: 's3', name: 'Haldiram Namkeen', price: 50, category: 'Chips & Snacks' },
        { id: 's4', name: 'Bingo Mad Angles', price: 20, category: 'Chips & Snacks' },
        { id: 's5', name: 'Uncle Chips', price: 20, category: 'Chips & Snacks' },
        { id: 's6', name: 'Parle-G Biscuits', price: 25, category: 'Chips & Snacks' }
      ]
    },
    {
      category: 'Beverages',
      items: [
        { id: 'b1', name: 'Pepsi (300ml)', price: 40, category: 'Beverages' },
        { id: 'b2', name: 'Thums Up (300ml)', price: 40, category: 'Beverages' },
        { id: 'b3', name: 'Coca Cola (300ml)', price: 40, category: 'Beverages' },
        { id: 'b4', name: 'Mountain Dew (300ml)', price: 40, category: 'Beverages' },
        { id: 'b5', name: 'Real Juice (1L)', price: 120, category: 'Beverages' },
        { id: 'b6', name: 'Packaged Water (1L)', price: 20, category: 'Beverages' }
      ]
    },
    {
      category: 'Groceries',
      items: [
        { id: 'g1', name: 'Basmati Rice (1kg)', price: 130, category: 'Groceries' },
        { id: 'g2', name: 'Toor Dal (1kg)', price: 150, category: 'Groceries' },
        { id: 'g3', name: 'Wheat Flour (1kg)', price: 45, category: 'Groceries' },
        { id: 'g4', name: 'Cooking Oil (1L)', price: 180, category: 'Groceries' },
        { id: 'g5', name: 'Sugar (1kg)', price: 50, category: 'Groceries' },
        { id: 'g6', name: 'Tea Powder (250g)', price: 120, category: 'Groceries' }
      ]
    },
    {
      category: 'Personal Care',
      items: [
        { id: 'p1', name: 'Dove Soap (100g)', price: 45, category: 'Personal Care' },
        { id: 'p2', name: 'Colgate Toothpaste', price: 80, category: 'Personal Care' },
        { id: 'p3', name: 'Pantene Shampoo (180ml)', price: 150, category: 'Personal Care' },
        { id: 'p4', name: 'Fair & Lovely Cream', price: 120, category: 'Personal Care' },
        { id: 'p5', name: 'Dettol Handwash', price: 95, category: 'Personal Care' },
        { id: 'p6', name: 'Parachute Coconut Oil', price: 110, category: 'Personal Care' }
      ]
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85', alt: 'Traditional Kashmiri Dish' },
    { url: 'https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', alt: 'Mutton Curry' },
    { url: 'https://images.unsplash.com/photo-1545247181-516773cae754?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', alt: 'Authentic Waazwan' },
    { url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', alt: 'Rich Curry' },
    { url: 'https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxLYXNobWlyaSUyMGN1aXNpbmV8ZW58MHx8fHwxNzYwNTk5MjQyfDA&ixlib=rb-4.1.0&q=85', alt: 'Traditional Cooking' },
    { url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxtdXR0b24lMjBjdXJyeXxlbnwwfHx8fDE3NjA1OTkyNDd8MA&ixlib=rb-4.1.0&q=85', alt: 'Delicious Curry' }
  ];

  const testimonials = [
    { name: 'Ahmed Khan', text: 'The most authentic Waazwan in Srinagar! The Rogangosh reminds me of my grandmother\'s cooking.', rating: 5 },
    { name: 'Priya Sharma', text: 'Excellent home delivery service. Fresh groceries and delicious food at my doorstep.', rating: 5 },
    { name: 'Faisal Dar', text: 'Best Rista and Gushtaab in town. The quality is consistent and the staff is very courteous.', rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <Cart />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="h-8 w-8 text-[#61525a]" />
              <h1 className="text-xl md:text-2xl font-bold text-[#1e1919]">Aroma Café & Fine Dine</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#menu" className="text-[#736c64] hover:text-[#61525a] transition-colors">Menu</a>
              <a href="#store" className="text-[#736c64] hover:text-[#61525a] transition-colors">Store</a>
              <a href="#gallery" className="text-[#736c64] hover:text-[#61525a] transition-colors">Gallery</a>
              <a href="#about" className="text-[#736c64] hover:text-[#61525a] transition-colors">About</a>
              <a href="#contact" className="text-[#736c64] hover:text-[#61525a] transition-colors">Contact</a>
              <Button
                onClick={() => setIsCartOpen(true)}
                variant="outline"
                className="relative border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Button>
              <Button className="bg-[#61525a] hover:bg-[#4a3f44] text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                onClick={() => setIsCartOpen(true)}
                variant="outline"
                size="sm"
                className="relative"
              >
                <ShoppingCart className="h-4 w-4" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 space-y-2">
              <a href="#menu" className="block py-2 text-[#736c64] hover:text-[#61525a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Menu</a>
              <a href="#store" className="block py-2 text-[#736c64] hover:text-[#61525a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Store</a>
              <a href="#gallery" className="block py-2 text-[#736c64] hover:text-[#61525a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#about" className="block py-2 text-[#736c64] hover:text-[#61525a] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="block py-2 text-[#736c64] hover:text-[#61525a] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Button className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white mt-2">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#f7f5f2] py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1919] leading-tight">
                Authentic Kashmiri Flavours
              </h2>
              <p className="text-lg md:text-xl text-[#736c64]">
                Traditional Waazwan & Daily Essentials Delivered to Your Doorstep
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#61525a] hover:bg-[#4a3f44] text-white" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Utensils className="mr-2 h-5 w-5" />
                  Order Food
                </Button>
                <Button size="lg" variant="outline" className="border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white" onClick={() => document.getElementById('store')?.scrollIntoView({ behavior: 'smooth' })}>
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Essentials
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
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
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
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
      <section id="menu" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-4">Our Signature Menu</h2>
            <p className="text-lg text-[#736c64]">Authentic dishes from Biryani to Chinese cuisine - Over 80+ items!</p>
          </div>

          <Tabs defaultValue="biryani" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="biryani">Biryani & Rice</TabsTrigger>
              <TabsTrigger value="indian">Indian Non-Veg</TabsTrigger>
              <TabsTrigger value="chinese">Chinese</TabsTrigger>
              <TabsTrigger value="starters">Starters</TabsTrigger>
              <TabsTrigger value="veg">Vegetarian</TabsTrigger>
              <TabsTrigger value="specials">Chef Specials</TabsTrigger>
            </TabsList>

            <TabsContent value="biryani">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[0].items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <Button onClick={() => handleAddToCart(item)} className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="indian">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[1].items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <Button onClick={() => handleAddToCart(item)} className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chinese">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[2].items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <Button onClick={() => handleAddToCart(item)} className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="starters">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[3].items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <Button onClick={() => handleAddToCart(item)} className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="veg">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[4].items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <Button onClick={() => handleAddToCart(item)} className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specials">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[5].items.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-[#61525a]">₹{item.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button onClick={() => handleAddToCart(item)} className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
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
      <section id="store" className="py-12 md:py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-4">Departmental Store</h2>
            <p className="text-lg text-[#736c64]">Daily essentials and groceries delivered fresh</p>
          </div>

          <Tabs defaultValue="snacks" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="snacks">Chips & Snacks</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
              <TabsTrigger value="groceries">Groceries</TabsTrigger>
              <TabsTrigger value="personal">Personal Care</TabsTrigger>
            </TabsList>

            {storeProducts.map((productCategory, idx) => (
              <TabsContent key={idx} value={productCategory.category.toLowerCase().split(' ')[0].replace('&', '')}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productCategory.items.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription className="text-xl font-bold text-[#61525a]">₹{product.price}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button onClick={() => handleAddToCart(product)} className="w-full bg-[#61525a] hover:bg-[#4a3f44] text-white">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-4">Our Gallery</h2>
            <p className="text-lg text-[#736c64]">A glimpse of our authentic Kashmiri delicacies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <div key={idx} className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-6">About Us</h2>
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#fad24b] text-[#fad24b]" />
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

      {/* Contact Section with Google Maps */}
      <section id="contact" className="py-12 md:py-20 bg-[#f7f5f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-4">Visit or Order</h2>
            <p className="text-lg text-[#736c64]">We deliver across Shalimar and nearby areas</p>
          </div>
          
          {/* Google Maps */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.2869446!2d74.8875!3d34.1051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA2JzE4LjQiTiA3NMKwNTMnMTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aroma Café & Fine Dine Location"
            ></iframe>
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
                <Button
                  variant="outline"
                  className="mt-4 border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white"
                  onClick={() => window.open('https://maps.google.com/?q=Skuast+Road+Shalimar+Srinagar', '_blank')}
                >
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
                  <span className="text-[#736c64] text-sm break-all">javeedaslamjaveednahami@gmail.com</span>
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
                <li><a href="#gallery" className="text-[#bbb5ae] hover:text-white transition-colors">Gallery</a></li>
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
