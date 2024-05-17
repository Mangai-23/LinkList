'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'; 
export default function LoginWithGoogle (){

    // const data= useSession();
    // console.log(data);
    return (
        <button 
            onClick={() =>signIn('google')}
            className="bg-white shadow text-center flex justify-center items-center w-full py-4 gap-3">
            <FontAwesomeIcon icon={faGooglePlusG} className="h-6" />
            <span>Sign In with Google</span>
        </button>
    );
}