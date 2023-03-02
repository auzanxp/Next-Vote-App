import Head from "next/head";
import Image from "next/image";
import {signIn} from "next-auth/react"
import Button from "../Button";

export default function RestrictedPage() {
    return (
        <div className="container flex flex-col justify-center items-center h-screen space-y-5">
            <Head>
                <title>Login dulu</title>
            </Head>
            <Image
                src={'/assets/restricted.svg'}
                width={200}
                height={200}
                alt='restricted'
            />

            <h1 className="text-4xl font-bold"> Login Dulu!</h1>
            <h2 className="text-lg">
                Untuk mengakses halaman ini, kamu wajib login terlebih dahulu
            </h2>
            <Button
                text="Login"
                onClick={signIn}
            />
        </div>
    )
}