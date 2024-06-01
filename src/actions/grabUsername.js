'use server'
import { Page } from "@/models/page";
import mongoose from "mongoose";
// import { redirect } from "next/navigation";

export default async function grabUsername(formData) {
    try {
        const username = formData.get('username');
        
        if (!username) {
            throw new Error("Username is required");
        }

        // Connect to MongoDB
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }

        const existingUser = await Page.findOne({ uri: username });

        if (existingUser) {
            return { success: false, message: "Username already taken" };
            // return redirect('/account?usernameTaken=1');
        } else {
            const newUser = await Page.create({ uri: username });
            return { success: true, data: newUser };
            // return redirect('/account/' + username);
        }
    } catch (error) {
        console.error(error);
        return { message: error.message };
    }
}

// 'use server'
// import {Page} from "@/models/page";
// import mongoose from "mongoose";
// // import { redirect } from "next/navigation";
// export default async function grabUsername(formData)
// {
//     const username = formData.get('username');
//     mongoose.connect(process.env.MONGO_URI);
//     const existingUser = await Page.findOne({uri:username});
//     if(existingUser){
//         return false;
//         //return redirect('/account?usernameTaken=1');
//     }
//     else{
//         return await Page.create({uri:username});
//         //return redirect('/account/'+username);
//     }
// }
