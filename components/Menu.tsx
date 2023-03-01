import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";

export default function Menu() {
    const router = useRouter()
    return <div className='flex justify-between mt-4'>
        <Image
            className="cursor-pointer"
            src={'/assets/Jujurly.svg'}
            width={100}
            height={100}
            alt='Logo'
            onClick={() => router.push('/')}
        />
        <Button text="Login" />
    </div>
}