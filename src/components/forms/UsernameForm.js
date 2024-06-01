'use client'
import RightIcon from "@/components/icons/RightIcon"
import grabUsername from "@/actions/grabUsername"
import { useState } from "react"
import { redirect } from "next/navigation";
export default function UsernameForm({desiredUsername}){
    // console.log(location.href);
    const [taken, setTaken]= useState(false);
    async function handleSubmit(formData){
        const result = await grabUsername(formData);
        setTaken(result.success === false);
        if(result.success){
            redirect('/account/'+ formData.get('username'));
        }
    }
    return (
        <form action={handleSubmit}>
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
                {taken && (
                    <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
                        Username is Already Taken
                    </div>
                )}
                {/* <UsernameFormResult /> */}
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-4 mx-auto py-2 w-full flex gap-2 items-center justify-center">
                    <span>Claim Your Username</span>
                    <RightIcon />
                </button>
            </div>
        </form>
    )
}