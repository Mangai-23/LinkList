import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import RadioTogglers from '@/components/buttons/formItems/RadioTogglers';
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { getServerSession } from 'next-auth';
import Image from 'next/image';
export default async function PageSettingsForm({page}) {
    const session = await getServerSession(authOptions);
    return(
      <div className="-m-4">
        <form>
            <div className="bg-gray-300 py-16 flex justify-center items-center">
                <RadioTogglers 
                    options={[
                        {value: 'color',icon: faPalette,label:'Color'},
                        {value:'image',icon: faImage,label:'Image'},
                    ]} 
                 />
              
            </div>
            <div className='flex justify-center -mb-12'>
               <Image 
                 className='rounded-full relative -top-8 border-4 border-white shadow-lg shadow-black/50' 
                 src={session.user.image} 
                 alt={'avatar'} 
                 width={128}
                 height={128} />
            </div> 
            <div className='p-4'>
                <label className="input-label" htmlFor="nameIn">Display Name</label>
                <input type="text" id="nameIn" placeholder='John Doe' />
                <label className="input-label" htmlFor="locationIn">Location</label>
                <input type="text" name="" id="locationIn" placeholder='Somewhere in the world' />
                <label className="input-label" htmlFor="bioIn">Bio</label>
                <textarea name="" id="bioIn" placeholder='Your Bio goes here'/>
                
            </div>
        </form>
      </div>
    );
}