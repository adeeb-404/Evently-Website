import React from 'react'
import '../CSS-components/ProfilePage.css'
import { HiPencilSquare } from "react-icons/hi2";

export const ProfilePage = () => {
  return (
    <div className='profilePage bg-gradient-to-b from-slate-900 to-slate-950'>
      <h1 className='text-2xl'>Profile page </h1>
      <div className='flex gap-x-12 p-6'>
        <div className='relative'>
          <div className='imageDiv absolute h-full w-full  top-0 rounded-full hover:bg-opacity-75'>
          <HiPencilSquare  className=" opacity-0 absolute top-[80%] right-[42%] hover:opacity-100 "/>
          </div>
          <img src='./HD-wallpaper-marvel-moon-knight-2022.jpg' className='w-100 h-72 rounded-full' />
        </div>
        <div className='flex flex-col text-start'>
          <p className='profileHeadings'>Username :</p> <p className='profileContent'> Manoj</p>
          <p className='profileHeadings'>First Name :</p> <p className='profileContent'> Manoj </p>
          <p className='profileHeadings'>Last Name :</p> <p className='profileContent'> Hebbar</p>
          <p className='profileHeadings'>Email :</p> <p className='profileContent'> manojhebbar@gmail.com </p>
        </div>
      </div>
    </div>
  )
}
