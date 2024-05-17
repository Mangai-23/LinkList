import LogoutButton from '@/components/buttons/LogoutButton';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default async function Header(){
    const session = await getServerSession(authOptions);
    // console.log(session);
  return (
    <header className="bg-white border-b py-4">
        <div className="max-w-4xl flex justify-between mx-auto px-8">
            <div className="flex items-center gap-6">
                <Link href={'/'} className='flex items-center gap-2 text-blue-600'>
                <FontAwesomeIcon icon={faLink} className='text-blue-500'/>
                    <span className='font-bold'>LinkList</span>
                </Link>
                <nav className="flex items-center gap-4 text-slate-500 text-sm">
                    <Link href={'/about'}>About</Link>
                    <Link href={'/pricing'}>Pricing</Link>
                    <Link href={'/contact'}>Contact</Link>
                </nav>
            </div>
            <nav className="flex items-center gap-4 text-sm text-slate-500">
                {!!session && (
                    <>
                    <Link href={'/profile'}>Hello, {session?.user?.name}</Link>
                    <LogoutButton />
                    </>
                )}
                {!session && (
                    <>
                        <Link href={'/login'}>Sign In</Link>
                        <Link href={'/login'}>Create Account</Link>
                    </>
                )}
                
            </nav>
        </div>
  </header>
  );
}
