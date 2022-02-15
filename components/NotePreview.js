import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/client";
import { db } from "../firebase";

function NotePreview ({ id, fileName, date }) {

    const [session] = useSession();
    const router = useRouter();

    function goToNote () {
        router.push(`doc/${id}`)
    }

    function deleteNote (e) {
        e.preventDefault();
        db.collection('userDocs')
        .doc(session.user.email)
        .collection("docs")
        .doc(id).delete();
    }

    return (
        <>
        <div className="flex items-center rounded-lg transition bg-gray-900 hover:bg-white text-white hover:text-black cursor-pointer p-2">
            {/* <Icon className="pl-2" name="article" size="3xl" color="white"/> */}
            <p onClick={goToNote} className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
            <Button
                onClick={deleteNote}
                color="gray"
                buttonType="outline"
                iconOnly={true}
                ripple="dark"
                className="border-0"
            >
                <Icon name="delete_outline" size="2xl" color="black"/>
            </Button>
        </div>
        <br></br>
        </>
    )
}

export default NotePreview;