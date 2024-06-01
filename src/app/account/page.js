import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
export default async function AccountPage({searchParams, ...rest}){
    console.log(rest);
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    if(!session){
        redirect('/');
    }
    return (
        <div>
            <UsernameForm desiredUsername={desiredUsername}/>
        </div>

    );
}