import { Card, CardHeader, Divider, Avatar } from "@nextui-org/react"


export default function TeamCard({data, job, experience}){
    const {name, email, picture} = data
    return(
        <Card className="min-w-[220px] w-[220px] p-4">
            <CardHeader>
                <div>
                    <Avatar isBordered radius="gull" size='md' src={`${picture.medium}`} />
                    <div className="flex flex-col gap-1 items-start justify-center mt-2">
                        <p className="text-small font-semibold leading-none text-default-600">{`${name.first} ${name.last}`}</p>
                        <p className="text-small tracking-tight text-default-400">{email}</p>
                        <p className="text-small font-semibold leading-none text-default-600">{job}</p>
                        <Divider/>
                        <p className="text-xs font-semibold">{experience}</p>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}