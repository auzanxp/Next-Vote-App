import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import CandidateItem from "../../components/CandidatItem";
import CountDown from "../../components/CountDown/Countdown";
import Menu from "../../components/Menu";

export default function DetailParticipant() {
    const router = useRouter();
    const { code } = router.query;
    return (
        <div className="container mx-auto">
            <Head>
                <title>Mulai Voting</title>
            </Head>
            <Menu />

            <div>
                <h1 className="text-4xl mt-10 text-center">Judul Voting</h1>

                {/* timer */}
                <CountDown/>
                {/* timer */}

                <div className="mt-10 space-y-3 w-2/3 mx-auto">
                    <CandidateItem />
                    <CandidateItem />
                    <CandidateItem/>
                </div>

                <div className="text-center mt-10">
                    <Button text="Kirim Vote Saya"/>
                </div>
            </div>
        </div>
    );
}
