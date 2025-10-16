import React from 'react';
import { X, Plus, Minus, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, getCartCount, isCartOpen, setIsCartOpen, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = 'Hello! I would like to place an order:\n\n';
    cartItems.forEach(item => {
      message += `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${getCartTotal()}\n\nPlease confirm my order. Thank you!`;

    const whatsappUrl = `https://wa.me/919419429575?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart ({getCartCount()} items)
          </SheetTitle>
          <SheetDescription>
            Review your items and place order via WhatsApp
          </SheetDescription>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-lg text-gray-500">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-2">Add items to get started</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-280px)] mt-6">
              <div className="space-y-4 pr-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-[#61525a] font-bold mt-1">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 mt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-[#61525a]">₹{getCartTotal()}</span>
              </div>
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </Button>
              <Button
                onClick={clearCart}
                variant="outline"
                className="w-full"
              >
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;