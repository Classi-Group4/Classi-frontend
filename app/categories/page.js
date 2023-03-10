'use client';

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";




export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [classes , setClasses] = useState(null);
  const category2 = 'Category'
  const { push } = useRouter();


  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    push('/categories/classes')

    
    
    

  }
  localStorage.setItem(category2 , (selectedCategory))
  return (
    <>
    {/* <div>
      <h2>Classes for {selectedCategory}</h2>
      <ul>
        {classes.map(item => (
          <li key={item.id}>{item.classname}</li>
        ))}
      </ul>
    </div> */}
    <h1 className="text-5xl font-bold mt-20 flex justify-center text-[#111827]">Categories</h1>
    <div className="mt-6 flex flex-wrap	grid grid-cols-3 gap-4">
        
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            src="https://oxy33.com/wp-content/uploads/2021/05/How-to-start-a-personal-training-business--2048x1365.jpg"
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Personal Training
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Personal Training")}  className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            src="https://thumbs.dreamstime.com/b/abstract-music-background-collage-musical-instruments-hand-drawing-doodle-vector-illustration-84207786.jpg"
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Music
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Music")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96"
            src="https://media.istockphoto.com/id/93435225/photo/collection-of-various-sports-balls.jpg?s=612x612&w=0&k=20&c=zIduP-_CKhlgWwEbj1sn9x5KaTn6wxZk7EAFUj_B3cg= "
            
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Sports
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Sports")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96"
            src="https://static.vecteezy.com/system/resources/previews/003/497/192/original/cyber-network-protection-future-technology-background-free-vector.jpg"
            
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Software Development
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Software Development")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div><div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96"
            src="https://img.freepik.com/premium-vector/different-countrys-languages-dark-background-cover-banner-international-mother-language_179104-84.jpg?w=1380 "
            
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Languages
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Languages")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div><div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96"
            src="https://t4.ftcdn.net/jpg/01/35/89/47/360_F_135894733_ACc7qTwci1H6SoePLGNRHXZrLjdS5ne6.jpg"
            
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Cooking
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Cooking")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div><div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96"
            src="https://www.teahub.io/photos/full/92-924127_art-black-background-spectrum-colors-wallpaper-black-and.jpg "
            
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Arts
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Arts")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div><div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96"
            src="https://images.vexels.com/content/220323/preview/black-engineering-background-design-9b6630.png"
            
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
            Engineering
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Engineering")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div><div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
          <img
            className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center w-96"
            src="https://cdn5-ss18.sharpschool.com/UserFiles/Servers/Server_27933380/Image/Departments/Social%20Studies/Social%20Studies%20Dept/Social_Studies_Wordle-190d0rf.png "
            
          />
        </div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-[#576F72]">
          Social Studies
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-[#c7e0e0]">
            <button onClick={()=> handleCategorySelection("Social Studies")} className=" bg-[#7D9D9C] text-xs text-white px-2 py-2 font-semibold rounded uppercase hover:bg-gray-700">
              See Classes
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
