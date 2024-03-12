import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductsTab } from "@/components/products/tab";
import { TabsSkeleton } from "@/components/products/skeleton";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <div className="mx-3">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
