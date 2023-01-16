import React from "react";
import {useState} from "react";


 export default function Form(){
    const [userInput, setUserInput] = useState({
        category: "",
        className: "",
        price: 0,
        location: "",
        duration: "",
        teacherName: "",
      });
    

return(
  
    <div class="flex justify-left">
    
    <form class="bg-white rounded-md shadow-md p-8 w-1/3">
    
    
    <label class="block font-medium text-sm mb-2">
    Category:
    <select class="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300">
        <option value="" disabled selected>Select a course field</option>
        <option value="category1">Music</option>
        <option value="category2">Coding</option>
        <option value="category3">Engineering</option>
    </select>
    </label>

    <br />

    <label class="block font-medium text-sm mb-2">
      Class Name:
      <input
        class="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="className"  
      />
    </label>

    <br />

    <label class="block font-medium text-sm mb-2">
      Price:
      <input
        class="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="price"    
      />
    </label>

    <br />

    <label class="block font-medium text-sm mb-2">
      Location:
      <input
        class="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="location"   
      />
    </label>

    <br />

    <label class="block font-medium text-sm mb-2">
      Class Duration:
      <input
        class="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="duration"   
      />
    </label>

    <br />
    
    <label class="block font-medium text-sm mb-2">
      Teacher name:
      <input
        class="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="teacherName"   
      />
    </label>

    <br />

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mx-auto my-auto flex justify-center" type="submit">Create Class</button>
    
  </form>
  </div> 

  
    );
 }
