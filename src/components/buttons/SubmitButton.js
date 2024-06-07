import {useFormStatus } from "react-dom";

export default function SubmitButton({children}){
    const {pending} = useFormStatus();
    return(
        <button 
            type="submit" 
            disabled={pending} 
            className="bg-blue-500 disabled:bg-blue-300 disabled:text-gray-200 text-white px-4 mx-auto py-2 w-full flex gap-2 items-center justify-center">
            {/* <span>Claim Your Username</span>
            <RightIcon /> */}
            {children} 
        </button>
    );
}