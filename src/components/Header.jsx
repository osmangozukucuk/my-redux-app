import React from 'react'
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';



const Header = () => {  
  const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between  bg-indigo-600 text-white px-3 '>
        <div className='text-3xl'>REACT-UYGULAMA</div>
        <div className='flex items-center gap-5'>
            <div className='text-black'>
                <select className='h-7 rounded-lg' name='' id=''> 
                <option value='asc'>Artan</option>
                <option value='desc'>Azalan</option>
                </select>
            </div>
            <div>
                <input className='h-7 rounded-lg px-4' type="text" placeholder='Arama...'/>
            </div>
            <div onClick={() => dispatch (modalFunc()) } className='bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
            <MdPostAdd size={24}/>
            </div>
        </div>
    </div>
  )
}

export default Header