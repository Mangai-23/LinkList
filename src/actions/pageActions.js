'use server'
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {Page} from "@/models/page";
export async function savePageSettings(formData){
    mongoose.connect(process.env.MONGO_URI);
    const session = await getServerSession(authOptions);
    if(session){
        //const page = await Page.findOne({owner:session?.user?.email});
        const displayName = formData.get('displayName');
        const location = formData.get('location');
        const bio = formData.get('bio');
        const bgType  =formData.get('bgType');
        const bgColor = formData.get('bgColor');
        await Page.updateOne(
            {owner: session?.user?.email},
            {displayName,location,bio,bgType,bgColor}
        );
        return true;
    }
    return false;

}