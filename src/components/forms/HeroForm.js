'use client'
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default  function HeroForm(){
    useEffect(() => {
        if(
            'localStorage' in window && window.localStorage.getItem('desiredUsername')
        ) {
            const username = window.localStorage.getItem('desiredUsername');
            //window.localStorage.removeItem('desiredUsername');
            redirect('/account?username=' + username);
        }  
    },[]);
    async function handleSubmit(ev){
        ev.preventDefault();
        const form = ev.target;
        const input = form.querySelector('input');
        // console.log(input.value);
        const username = input.value;
        if(username.length > 0){
            // await signIn('google',{
            //     redirect: '/account?username='+username,
            // });
            window.localStorage.setItem('desiredUsername', username);
            await signIn('google');
        }
    }
    return(
        <>
        <form cl
            onSubmit={handleSubmit}
            className="inline-flex items-center shadow-lg shadow-gray-500/20">
                <span 
                    className="bg-white py-4 pl-4">
                    linklist.to/
                </span>
                <input type="text" 
                    className="py-4" 
                    placeholder="username" />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-4 px-6"> 
                    Join for Free
                </button>
        </form>
        </>
    );
}