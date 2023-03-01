import Head from "next/head";
import Image from "next/image";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import id from "date-fns/locale/id"
import Form from "../../components/Form";
import Menu from "../../components/Menu";
import { useState } from "react";
import CandidateForm from "../../components/CandidatetForm";
import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Button";

registerLocale("id", id);

export default function CreateVote() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [candidates, setCandidates] = useState<Candidate[]>([])

    const submitCandidate = (candidate: Candidate) => {
        setCandidates(
            candidates.map((c) => (c.key === candidate.key ? candidate : c))
        )
    }

    const addCandidateForm = () => {
        const newCandidate: Candidate = {
            name: "",
            key: candidates.length + 1,
            title: ""
        }
        setCandidates([...candidates, newCandidate])
    }

    const removeCandidateForm = (key: number) => {
        // list kandidat baru kecuali dengan key diatas..
        const newCandidate = candidates.filter((candidate) => candidate.key !== key)
        // re-arrange atau diurutkan ulang key nya..
        newCandidate.forEach((candidate, index) => {
            candidate.key = index + 1
        })
        setCandidates(newCandidate)
    }

    return (
        <div className="container mx-auto">
            <Head>
                <title>Voting Baru</title>
            </Head>
            <Menu />
            <div className="py-10">
                <Image
                    src={'/assets/vote.svg'}
                    width={284}
                    height={198}
                    alt='vote baru'
                />
                <h1 className="text-4xl font-bold">Buat Vote Baru</h1>
                <h2 className="text-zinc-700 mt-3">Silahkan masukkan data yang dibutuhkan sebelum membuat  vote online</h2>

                <form className="flex flex-col">
                    {/* < Detail vote & DatePick> */}
                    <div className="space-y-5">
                        <h3 className="font-medium text-xl mt-10">Detail Voting</h3>
                        <div className="flex flex-col">
                            <label className="mt-5 text-sm">Judul</label>
                            <Form
                                className="w-1/3 mt-1"
                                value={""}
                                placeholder={"Contoh : Voting Calon Gubernur"}
                                onChange={() => { }}
                            />
                        </div>
                        <div className="flex flex-col w-2/3">
                            <label className="text-sm mt-5">Kapan dimulai?</label>
                            <div className="inline-flex">
                                <ReactDatePicker
                                    locale={'id'}
                                    showTimeSelect
                                    selected={startDate}
                                    onChange={(date) => date && setStartDate(date)}
                                    dateFormat={"Pp"}
                                    minDate={new Date()}
                                    className={"w-full bg-zinc-100 py-2 px-3"}
                                />
                                <span className="text-sm text-center p-3">sampai</span>
                                <ReactDatePicker
                                    locale={'id'}
                                    showTimeSelect
                                    selected={endDate}
                                    onChange={(date) => date && setEndDate(date)}
                                    dateFormat={"Pp"}
                                    minDate={startDate}
                                    className={"w-full bg-zinc-100 py-2 px-3"}
                                />
                            </div>
                        </div>
                    </div>
                    {/* </Detail vote & DatePick> */}

                    {/* <Kandidat> */}
                    <h3 className="font-medium text-xl mt-10">Kandidat</h3>
                    <div className="grid grid-cols-4 gap-4 mt-5">
                        {candidates.map((candidate: Candidate, index: number) => (
                            <CandidateForm
                                key={index}
                                candidate={candidate}
                                submitCandidate={submitCandidate}
                                removeCandidateForm={removeCandidateForm}
                            />
                        ))}
                        <div
                            className="w-1/3 flex flex-col items-center justify-center cursor-pointer bg-zinc-100 aspect-square text-zinc-300 hover:bg-black hover:text-white"
                            onClick={() => addCandidateForm()}
                        >
                            <PlusIcon />
                        </div>
                    </div>
                    {/* </kandidat> */}

                    <div className="self-end mt-10">
                        <Button text="Buat Voting" />
                    </div>
                </form>

            </div>
        </div>
    );
}
