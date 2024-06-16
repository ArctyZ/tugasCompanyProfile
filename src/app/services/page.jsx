import ProductCard from "@/components/ProductCard";
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



export default async function products(){
    const produk = await getProduct()
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-5">
        {produk.map((product, index)=>{
            return <ProductCard product={product} key={product.sys.id}/>
        })}
      </div>
    )
}