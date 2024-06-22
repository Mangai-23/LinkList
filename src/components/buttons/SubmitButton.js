import {useFormStatus } from "react-dom";

export default function SubmitButton({children,className=''}){
    const {pending} = useFormStatus();
    return(
        <button 
            type="submit" 
            disabled={pending} 
            className={"bg-[#f70776] disabled:bg-[#ff99c9eb] disabled:text-gray-200 text-white px-4 mx-auto py-2 w-full flex gap-2 items-center justify-center " + className }>
            {/* <span>Claim Your Username</span>
            <RightIcon /> */}
            {pending &&  
            (
                <span>Saving...</span>
            )}
            {!pending && children}
            {/* {children}  */}
        </button>
    );
}