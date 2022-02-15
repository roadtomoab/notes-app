import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";


function Header () {

    const [session] = useSession();

    return(
        <div className="sticky top-0 z-50 flex items-center px-4 py- 2 bg-black">
            <Button
                buttonType="outline"
                color="white"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="md:inline-flex h-20 w-20 border-0"
            >
                <Icon color="white" name="menu" size="3xl" />
            </Button>

            <div className="mx-5 md:mx-20 flex flex-grow items-center p-5 py-2 bg-white rounded-lg">
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none font-sans font-extralight" />
            </div>

            <Button
                buttonType="outline"
                color="white"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="md:inline-flex h-20 w-20 border-0"
            >
            <Icon
                onClick={signOut}
                name="logout"
                size="3xl"
                color="white"
            />
            </Button>

            {/* <img
                onClick={signOut}
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src={session?.user?.image}
                alt=""
            /> */}
        </div>
    )
}

export default Header;