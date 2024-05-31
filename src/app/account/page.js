import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import RightIcon from "@/components/icons/RightIcon"
import grabUsername from "@/actions/grabUsername"
export default async function AccountPage({searchParams, ...rest}){
    console.log(rest);
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    if(!session){
        redirect('/');
    }
    return (
        <div className="">
            <form action={grabUsername}>
                <h1 className="text-4xl font-bold text-center mb-2">
                    Grab Your Username 
                </h1>
                <p className="text-center mb-6 text-gray-500">
                    Choose your username
                </p>
                <div className="max-w-xs mx-auto">
                    <input 
                        className="block p-2 mx-auto border w-full mb-2 text-center"
                        name="username"
                        type="text" 
                        defaultValue={desiredUsername} 
                        placeholder="username" 
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 mx-auto py-2 w-full flex gap-2 items-center justify-center">
                        <span>Claim Your Username</span>
                        <RightIcon />
                    </button>
                </div>
            </form>
        </div>

    );
}