'use client'
import RadioTogglers from '@/components/buttons/formItems/RadioTogglers';
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import SubmitButton from '../buttons/SubmitButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {savePageSettings} from '@/actions/pageActions';
import toast from 'react-hot-toast';
import { useState } from 'react';
export default function PageSettingsForm({page, user}) {
    const [bgType, setBgType]=useState(page.bgType);
    const [bgColor, setBgColor] = useState(page.bgColor);
    //const session = await getServerSession(authOptions);
    async function saveBaseSettings(formData){
      console.log(formData.get('displayName'));
      const result = await savePageSettings(formData);
      if(result){
        toast.success('Saved!');
      }
    }
    function handleFileUpload(e){
      const file = e.target.files?.[0];
      if(file){
        const data = new FormData;
        data.set('file', file);
        fetch('/api/upload',{
          method: 'POST',
          body: data,
        })
        .then(response => {
          response.json().then(link =>{
            console.log(link);
          })
        })
      }
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onloadend = () => {
      //   setBgType('image');
      //   setBgColor(reader.result);
      // }
    }
    return(
      <div className="-m-4">
        <form action={saveBaseSettings}>
            <div 
              className="py-16 flex justify-center items-center"
              style={{
                backgroundColor: bgColor
              }}
            >
                <div>
                  <RadioTogglers 
                      defaultValue={page.bgType}
                      options={[
                          {value: 'color',icon: faPalette,label:'Color'},
                          {value:'image',icon: faImage,label:'Image'},
                      ]} 
                      onChange={val => setBgType(val)}
                  />
                  {/* Background Color */}
                  {bgType === 'color' && (
                      <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2">
                        <div className='flex justify-center gap-2'>
                          <span>Background color:</span>
                          <input 
                            type="color" 
                            name='bgColor' 
                            defaultValue={page.bgColor}
                            onChange={e => setBgColor(e.target.value)}
                          />
                        </div>
                    </div>
                    )}
                  {/* Background Image */}
                  {bgType === 'image' &&(
                      <div className='flex justify-center'>
                        <label 
                          className='bg-white shadow px-4 py-2 mt-2'
                        >
                          <input 
                            type="file" 
                            name="image" 
                            onChange={handleFileUpload}
                            className='hidden' 
                          />
                          <span>Change image</span>
                        </label>
                    </div>
                  )}
                </div>
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