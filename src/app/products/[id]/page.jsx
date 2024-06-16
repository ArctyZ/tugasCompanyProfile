import { Image, Button } from "@nextui-org/react";
import { contentfulClient } from "@/helpers/contentfulClient";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


async function getProduct(id){
    try {
        const client = contentfulClient()
        const res = await client.getEntry(id)
        return res;
    } catch (error) {
        console.error(error);
    }
}


const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="tracking-wide font-semibold text-lg">{children}</p>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="list-disc pl-4">{children}</ul>
        )
    }
}



export default async function ProductDetails({params}){
    const product = await getProduct(params.id)
    const {title, img, price, deskripsi} = product.fields

    return <div className="m-12 flex flex-col sm:flex-row gap-4">
        <div>
        <Image isZoomed isBlurred
          src={`https:${img.fields.file.url}`} alt="thumbnail" width={460} height={img.fields.file.details.image.height} className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
            <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="font-medium text-lg">Rp.{price.toLocaleString('id-ID')}</p>
            <div>{documentToReactComponents(deskripsi, options)}</div>
            </div>
            <div>
                <Button className="w-full text-lg" variant="ghost" color="success">Buy</Button>
            </div>
        </div>

        
    </div>
}