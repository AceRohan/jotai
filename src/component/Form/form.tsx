import React, { EventHandler } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"

type FormFields = {
    email:string;
    password:string;
    subject:string
}

export const Form = () => {
    const {register,handleSubmit,reset} = useForm<FormFields>();

    const onSubmit : SubmitHandler<FormFields> = (data)=>{
        console.log(data);
        reset()
    }
  return (
    <div className='flex justify-center'>
        <div className='bg-slate-500 border-2 border-black p-2' >
            Form Submission
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className=' m-2 flex justify-between'>
                    <input {...register("email",{required:true})} type="text" className='w-[40%] p-2' placeholder='Email'></input>
                    <input {...register("password"),{
                        required:true
                    }}  type="password" className='w-[40%] p-2' placeholder='Password'></input>
                </div>
                <div className='m-2'>
                    <input {...register("subject"),{
                        required:true
                    }} className='w-full p-2' placeholder='Subject'></input>
                </div>
                <div className='bg-black'>
                    <button type='submit' className='bg-green-500 w-full text-white font-bold p-2 rounded-[50px] ' >Submit</button>

                </div>
            </form>
        </div>

    </div>
  )
}


