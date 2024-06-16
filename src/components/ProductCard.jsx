import Link from "next/link"
import { Button, Card, CardBody, CardHeader, CardFooter, Image } from "@nextui-org/react"


export default function ProductCard({product}){
    let {title, img, price, miniDescription,} = product.fields
    price = price.toLocaleString('id-ID')
    return (
        <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{title}</h4>
          <small className="text-default-500">Rp.{price}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
          src={`https:${img.fields.file.url}`} alt="thumbnail" width={img.fields.file.details.image.width} height={img.fields.file.details.image.height} className="w-full h-full object-cover"
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start">
            <p className="py-2">{miniDescription}</p>
            <div>
            <Button variant="ghost" className="mr-2"><Link href={`/products/${product.sys.id}`}>More</Link></Button>
            <Button color="success" variant="shadow">Buy</Button>
            </div>
        </CardFooter>
      </Card>
    )
}