import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/page";
import connectToDatabase from "@/utils/mongodb";
export default async function AccountPage({searchParams, ...rest}){
    console.log(rest);
    await connectToDatabase();
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;
    if(!session){
        redirect('/');
    }
    const page = await Page.findOne({owner:session?.user?.email});
    if(page){
        return (
            <div> Your Page is: /{page.uri}</div>
        );
    }
    return (
        <div>
            <UsernameForm desiredUsername={desiredUsername}/>
        </div>

    );
}