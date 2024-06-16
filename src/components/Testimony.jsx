import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";



export default function Testimony({data}){
    const {nama, comment, tanggal} = data
    return <Card>
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-md">{nama}</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
      <p>{comment}</p>
    </CardBody>
    <Divider/>
    <CardFooter>
      <p>{tanggal}</p>
    </CardFooter>
  </Card>

}