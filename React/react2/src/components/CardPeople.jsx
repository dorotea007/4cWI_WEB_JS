import React, { useEffect } from "react";
export default function CardPeople({ name, title, imageUri }) {
  return (
    <div className='border grid grid-cols-2 h-min-40'>
      <div className='p-4'>
        <h2 className='font-bold text-xl'>{name}</h2>
        <h4>{title}</h4>
      </div>
      <div className='bg-green-400 w-full'>
        <img src={imageUri} alt='' className='object-cover w-full h-full' />
      </div>
    </div>
  );
}
