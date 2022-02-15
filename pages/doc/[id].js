import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { getSession, signOut, useSession } from "next-auth/client";
import ArrivalPage from "../../components/ArrivalPage";
import TextEditor from "../../components/TextEditor";

function Note () {
    const [session] = useSession();
    if (!session) return <ArrivalPage />;

    const router = useRouter();
    const { id } = router.query;

    const [currentNote, loadingCurrentNote] = useDocumentOnce(
        db.collection('userDocs')
        .doc(session.user.email)
        .collection('docs')
        .doc(id)
    );

    // if (!loadingCurrentNote && currentNote?.data()?.fileName) {
    //     router.replace('/')
    // }

    return (
        <div className="bg-black">
            <header className="flex justify-between items-center p-3 pb-1 bg-black pl-4">
                <span onClick={() => router.push("/")} className="cursor-pointer">
                    <Icon name="description" size="5xl" color="white"/>
                </span>

                <div className="flex-grow px-2 font-sans font-extralight text-white">
                    <h2 className="">{currentNote?.data()?.fileName}</h2>
                </div>
                <div className="cursor-pointer pr-4">
                    <Icon
                    onClick={signOut}
                    name="logout"
                    size="3xl"
                    color="white"
                    />
                </div>
            </header>
            <br></br>
            <TextEditor />
        </div>
    )
}

export default Note;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    }
}