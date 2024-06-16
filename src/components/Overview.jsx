import Link from "next/link"
import { Button } from "@nextui-org/react"

export default function Overview(){
    return <div className="flex items-center flex-col mt-[-50px]">
        <h2 className="text-center text-3xl font-bold ">Mengapa harus beli di PC Garrage?</h2>
        <p className="text-xl text-center tracking-wide py-2">Karena kami menyediakan PC dengan spesifikasi terbaik dan sangat sesuai dengan kebutuhan user.</p>
        <p className="text-xl text-center tracking-wide py-2">Sejak tahun 1999 kami telah merakit lebih dari 10.000 PC yang telah dikirim ke seluruh bagian Indonesia.</p>
        <Button variant="ghost" className="text-xl my-2 hover:bg-black"><Link href='/about'>More about us</Link></Button>
    </div>
}