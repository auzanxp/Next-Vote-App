import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react"
import Button from "../../components/Button";
import Form from "../../components/Form";
import RestrictedPage from "../../components/Page/RestrictedPage";

export default function Participant() {
    const router = useRouter()
    const [code, setCode] = useState('')
    const { data: session } = useSession();

    const handleSubmitCode = () => {
        router.push('/participant/kode-voting')
    }

    if (!session) {
        return <RestrictedPage/>
    }

    return (
        <div className="container flex flex-col items-center justify-center h-screen space-y-5 mx-auto">
            <Head>
                <title>Ikut Partisipasi</title>
            </Head>
            <Image
                src={'/assets/participant.svg'}
                width={351}
                height={280}
                alt='participant'
            />
            <h1 className="text-4xl font-bold">Ikutan Voting</h1>
            <h2 className="w-1/3 text-center">
                Untuk ikutan voting, kamu harus memasukkan kode voting yang sudah di berikan
                panitia/penyelenggara
            </h2>
            <Form
                className="w-1/3 mt-3 "
                value={code}
                placeholder={'Masukkan Kode Voting'}
                onChange={setCode}
            />

            <Button
                className="w-1/3"
                text="Lanjutkan"
                onClick={handleSubmitCode}
            />
            <button
                className="text-sm"
                onClick={() => router.push('/')}>
                Kembali
            </button>
        </div>
    )
}