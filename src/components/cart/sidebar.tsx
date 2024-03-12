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

export const CartSidebar = () => {
  const { cart } = useCartStore((state) => state);

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
        <div className="flex flex-col gap-5 my-3">...</div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-xs">
          <div>Subtotal</div>
          <div>...</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Button>Finalizar compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
