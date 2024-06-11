'use client'
import RadioTogglers from '@/components/buttons/formItems/RadioTogglers';
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import SubmitButton from '../buttons/SubmitButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function PageSettingsForm({page, user}) {
    //const session = await getServerSession(authOptions);
    function saveBaseSettings(formData){
      console.log(formData.get('displayName'));
    }
    return(
      <div className="-m-4">
        <form action={saveBaseSettings}>
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
                 src={user?.image} 
                 alt={'avatar'} 
                 width={128}
                 height={128} />
            </div> 
            <div className='p-4'>
                <label className="input-label" htmlFor="nameIn">Display Name</label>
                <input 
                  className="input-txt" 
                  type="text" 
                  id="nameIn" 
                  name="displayName"
                  defaultValue={page.displayName}
                  placeholder='John Doe'
                 />
                <label className="input-label" htmlFor="locationIn">Location</label>
                <input 
                  className="input-txt" 
                  type="text" 
                  id="locationIn" 
                  name="location"
                  defaultValue={page.location}
                  placeholder='Somewhere in the world' 
                />
                <label className="input-label" htmlFor="bioIn">Bio</label>
                <textarea 
                  className="input-txt" 
                  name="bio"
                  defaultValue={page.bio}
                  id="bioIn" 
                  placeholder='Your Bio goes here'/>
                <div className='max-w-[200px] mx-auto '>
                  <SubmitButton className="">
                    <FontAwesomeIcon icon={faSave} className='w-4 h-6'/>
                    <span>Save </span>
                  </SubmitButton>
                </div>
            </div>
        </form>
      </div>
    );
}