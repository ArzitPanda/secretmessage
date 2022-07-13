import React,{useEffect} from 'react'
import {db} from  './firebase'
import { collection, addDoc, doc, getDoc } from "firebase/firestore"; 
import { useState } from 'react';

const Navbar = () => {

const[name,setName]=useState("");
const[id,setId]=useState();
const [admin,setAdmin]=useState({msg:[]});

// var m={msg:[]};

const fetchData=async () => {
    const data= await getDoc(doc(db,'user',localStorage.getItem('admin')));
    // console.log(data.data());
  const data2=data.data();
        
        setAdmin(data2);
        console.log(admin)
return admin;
}

useEffect(  () => {


    

fetchData();
//   console.log(data);


    

    
},[]);






const storeUserInfo= async ()=>{
        if(!localStorage.getItem("admin"))
        {

            try {
                const data= await addDoc(collection(db,"user"),{
        
                    name:name,
                    message:[],
        
        
        
            })
            console.log('sucessfully send'+data.id);
            console.log(data.id);
            localStorage.setItem("admin",data.id);
            setId(data.id);
            console.log(id);
       
            } catch (error) {
                console.log(error)
            }
        
        
            setName("");
        


        }
       

}






  return (
    <div className="w-screen h-screen text-slate-100 bg-slate-700 flex items-center justify-center flex-col ">
            {!localStorage.getItem("admin") &&<div className="flex flex-col items-center justify-center w-3/5 mx-auto gap-y-2">
                
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="hello type your name" className="w-80 p-5 text-black text-xs"/>
            <button  onClick={storeUserInfo} className="bg-yellow-400 text-black font-semibold shadow-xl px-5 py-2 rounded-md">lets start</button>
                
                </div>}
            {localStorage.getItem("admin") && <div className="flex flex-col items-center justify-center ">
                


                <div >your id is</div>
                <div>{localStorage.getItem("admin")}</div>

                <input type="text" value={window.location.origin+"/users/"+localStorage.getItem("admin")}  className="w-80 p-5 text-black text-xs"/>
                
                
                </div>}
                

       
                <div className="flex flex-col items-center justify-center w-3/5 mx-auto">
                    {admin.msg.map((val,index)=>(<div className=" bg-slate-600 p-5 my-5 shadow-2xl rounded-xl" key={index}>{val}</div>))}
                    {localStorage.getItem("admin") &&  <button onClick={fetchData} className="bg-yellow-400 text-black font-semibold shadow-xl px-5 py-2 rounded-md">refresh</button>}
                </div>



           
           
    </div>
  )
}

export default Navbar