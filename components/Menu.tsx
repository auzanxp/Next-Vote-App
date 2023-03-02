import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react"
import Button from "./Button";

export default function Menu() {
    const router = useRouter()
    const { data: session } = useSession();

    return <div className='flex justify-between mt-4'>
        <Image
            className="cursor-pointer"
            src={'/assets/Jujurly.svg'}
            width={100}
            height={100}
            alt='Logo'
            onClick={() => router.push('/')}
        />
        {session ? (
            <div className="space-x-3">
                <span>{session?.user?.name}</span>
                <Button onClick={signOut} text="Logout" />
            </div>
        ) : (
            <Button onClick={signIn} text="Login" />
        )}
    </div>
}