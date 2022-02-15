import { getProviders, getSession, signIn } from "next-auth/client"
import Icon from "@material-tailwind/react/Icon";

function SignIn ({ providers }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-full py-56 bg-black">
            <h2 className="text-white text-5xl font-sans font-thin text-center py-4">SIGN IN</h2>
            <input
              className="h-12 w-72 px-2 font-sans font-thin"
              placeholder="email"
              type="text"
            />
            <br></br>
            <input
              className="h-12 w-72 px-2 font-sans font-thin"
              placeholder="password"
              type="password"
            />
            <br></br>
            <div className="flex flex-col items-center justify-center">
                <div className="pb-1">
                <Icon name="more_horiz" size="3xl" color="white"/>
                </div>
                {Object.values(providers).map((provider) => (
                <button
                    key={provider.name}
                    className="bg-black hover:bg-white text-white hover:text-black transition border-none py-3 px-5 cursor-pointer font-sans text-xl font-thin"
                    onClick={() => signIn(provider.id)}>
                    SIGN IN WITH GOOGLE
                </button>
                ))}
            </div>
            <a className="font-sans font-extralight text-white cursor-pointer pt-4">
                Don't have an account? Sign up here</a>
        </div>
    )
}

export default SignIn;

  SignIn.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });
  
    if (session && res && session.accessToken) {
      res.writeHead(302, {
        Location: "/",
      });
      res.end();
      return;
    }
  
    return {
      session: undefined,
      providers: await providers(context),
    };
  };