import Image from "next/image";
import { useRouter } from "next/router";
import {useSession, signIn, signOut} from "next-auth/react"
import Button from "./Button";

export default function Menu() {
    const router = useRouter()
    const { data: session } = useSession();

    return <div className='flex justify-between mt-4'>
        {JSON.stringify(session)}
        <Image
            className="cursor-pointer"
            src={'/assets/Jujurly.svg'}
            width={100}
            height={100}
            alt='Logo'
            onClick={() => router.push('/')}
        />
        <Button
            text="Login"
            onClick={signIn}
        />
    </div>
}