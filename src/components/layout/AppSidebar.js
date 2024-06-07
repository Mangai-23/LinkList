'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChartLine } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "@/components/buttons/LogoutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
export default function AppSidebar(){
    const path = usePathname();
    // console.log(path);
    return(
        <nav className="inline-flex mx-auto flex-col text-center mt-12 gap-6 text-gray-500">
                <Link 
                    href={'/account'} 
                    className={"flex gap-4 " + (path === '/account' ? 'text-blue-500 font-bold':'')}>
                  <FontAwesomeIcon 
                    fixedWidth={true}
                    icon={faFileLines} 
                    className="h-6 w-6"
                  />
                  {/* <FontAwesomeIcon icon={faFileLines} /> */}
                  <span>My Page</span>
                </Link>
                <Link 
                    href={'/analytics'} 
                    className={"flex gap-4 " + (path === '/analytics' ? 'text-blue-500 font-bold':'')}>
                <FontAwesomeIcon 
                  fixedWidth={true}
                  icon={faChartLine} 
                  className="h-6 w-6"
                />
                  <span>Analytics</span>
                </Link>
                <LogoutButton 
                  iconLeft={true} 
                  className={'flex gap-4 items-center text-gray-500'} 
                  iconClasses={'h-6 w-6'}
                />
                <Link href={'/'} className="flex gap-2 items-center text-sm text-gray-500 border-t pt-4">
                <FontAwesomeIcon icon ={faArrowLeft} className="h-3 w-3"/>
                  <span>Back to Website</span>
                </Link>
              </nav>
    );
}