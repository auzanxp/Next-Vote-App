import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Menu from '../components/Menu'
import { LinkIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import useVotes from '../lib/useVotes'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession();
  const { data: dataVotesApi, error, isLoading } = useVotes();

  const [votes, setVotes] = useState('')

  useEffect(() => {
    if (dataVotesApi) {
      setVotes(dataVotesApi.data)
    }
  }, [dataVotesApi])

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      {/* <Header> */}
      <div className='flex flex-col place-items-center py-32 space-y-3'>
        <h1 className='text-5xl font-bold'>Ayo Mulai Voting</h1>
        <h2 className='text-lg bg-zinc-100 px-3 py-1'>Web Voting No. 1 Di Indonesia</h2>
        <Image src={'/assets/header.svg'} width={274} height={243} alt='header' />
        <div className='space-x-10'>
          <Button
            text='Buat Vote Baru'
            onClick={() => router.push('/vote/create')}
          />
          <Button
            text='Ikutan Vote'
            type='secondary'
            className='text-black'
            onClick={() => router.push('/participant')}
          />
        </div>
      </div>
      {/* </Header> */}

      {/* <Table> */}
      {session && (
        <div>
          <p className='py-5 text-lg font-bold'>Vote yang saya buat</p>
          <table className='table-auto w-full border border-zinc-100'>
            <thead>
              <tr className='border-b border-zinc-100'>
                <th className='p-5 text-left'>No</th>
                <th className='p-5 text-left'>Judul</th>
                <th className='p-5 text-left'>Kandidat</th>
                <th className='p-5 text-left'>Kode</th>
                <th className='p-5 text-left'>Mulai</th>
                <th className='p-5 text-left'>Selesai</th>
                <th className='p-5 text-left'></th>
              </tr>
            </thead>
            <tbody>
              {votes && votes.lenght > 0 ?
                (votes.map((vote: votes, index: number) => (
                  <tr key={index}>
                    <td className='p-5 text-left'>{index + 1}</td>
                    <td className='p-5 text-left'>{vote.title}</td>
                    <td className='p-5 text-left'>
                      {vote.candidate.map((c: Candidate, index: number) => (
                        <span key={index}>
                          {c.name +
                            (
                              index < vote.candidate.lenght - 1 ? "vs" : ""
                            )}
                        </span>
                      ))}
                    </td>
                    <td className='p-5 text-left font-bold'>{vote.code}</td>
                    <td className='p-5 text-left'>{String(vote.startDateTime)}</td>
                    <td className='p-5 text-left'>{String(vote.endDateTime)}</td>
                    <td className='p-5 text-left'>
                      <a href='#'>
                        <LinkIcon className='w-4 h-4 hover:text-zinc-600' />
                      </a>
                      <a href='#'>
                        <TrashIcon className='w-4 h-4 hover:text-zinc-600' />
                      </a>
                    </td>
                  </tr>
                ))
                ) : "Belum ada vote yang dibuat"}
            </tbody>
          </table>
        </div>
      )}

      {/* </Table> */}
    </div>
  )
}

export default Home
