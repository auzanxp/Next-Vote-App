import Image from "next/image";
import Button from "./Button";

export default function Menu() {
    return <div className='flex justify-between mt-4'>
        <Image src={'/assets/Jujurly.svg'} width={100} height={100} alt='Logo' />
        <Button text="Login" />
    </div>
}