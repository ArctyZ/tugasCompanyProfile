import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import ProductCard from "@/components/ProductCard";
import Testimonies from "@/components/Testimonies";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { contentfulClient } from "@/helpers/contentfulClient";




async function getProduct(){
  try {
    const client = contentfulClient()
    const res = await client.getEntries({content_type: 'product'})
    return res.items;
  } catch (error) {
    console.error(error);
  }
}


export default async function Home() {
  const products = await getProduct()
 
  return (
    <div>
      <Hero/>
      <Overview/>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((product, index)=>{
          if(index < 3){
            return <ProductCard product={product} key={product.sys.id}/>
          }
        })}
      </div>
      <div className="w-full flex justify-center my-4">
      <Button variant="ghost" className="text-xl"><Link href='/services'>More products</Link></Button>
      </div>
        <Testimonies/>
    </div>
  );
}
