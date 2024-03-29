"use client";

import { useState } from "react";
import { RocketIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useCartStore } from "@/stores/cart-store";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "./item";
import { CheckoutDialog } from "../checkout/dialog";

export const CartSidebar = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { cart } = useCartStore((state) => state);

  let subTotal = 0;

  for (let item of cart) {
    subTotal += item.quantity * item.product.price;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-xs">
          <div>Subtotal</div>
          <div>R$ {subTotal.toFixed(2)}</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Button
            onClick={() => setCheckoutOpen(true)}
            disabled={cart.length === 0}
          >
            Finalizar compra
          </Button>
        </div>
        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
      </SheetContent>
    </Sheet>
  );
};
