


import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import {getDoc,doc,updateDoc, arrayUnion} from 'firebase/firestore'
import { db } from './firebase';

function ProfilePage() {
    
    let { userId } = useParams();
    const [user,setUser]=useState(userId);
        const[hello,setHello]=useState({})

useEffect(  () => {
 

        const fetchData=async () => {
            const data= await getDoc(doc(db,'user',user));
            console.log(data.data());
           localStorage.setItem('user',data.data().name);
           
               
    
        }


      fetchData(); 

  
}, [localStorage]);

  const[text,setText]=useState("");


const sendMessage=async ()=>{

const docRef= doc(db,'user',user);
try {
    const data =await updateDoc(docRef,{
        msg:arrayUnion(text)
    })
    console.log("sucessfully");
    setText("");
} catch (error) {
    console.log(error);
}



}



      return(<div className="w-screen h-screen text-slate-100 bg-slate-700 flex items-center justify-center flex-col ">
       
       
       
        <div className="flex items-center justify-center flex-col gap-y-4">
        <h2 className="text-center capitalize bg-purple-800 px-6 py-2 shadow-xl">message for {localStorage.getItem("user")}</h2>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="enter your message" className="w-80 p-5 text-black text-xs rounded-full"/>
            <button onClick={sendMessage}  className="bg-yellow-400 text-black font-semibold shadow-xl px-5 py-2 rounded-md">Submit</button>
        </div>

  
  
      </div>)
  
  
   
  }



  export default ProfilePage;