import { useSession } from "next-auth/react"
import RestrictedPage from "../../components/Page/RestrictedPage";

export default function Vote() {
    const { data: session } = useSession();

    if (!session) {
        return <RestrictedPage/>
    }
    return (
        <div>Vote</div>
    )
}