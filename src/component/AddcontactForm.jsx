import React, {useState} from "react";
import Button from "./Button";


export default function AddContactForm({onSubmit}){
    
    const [phone, setPhone]=useState(0)
    const [name, setName]=useState('')

    const handleNameChange=(event)=>{
        console.log(event.target.value );
        setName(event.target.value)
    };
    const handlePhoneChange=(event)=>{
        console.log(event.target.value);
        setPhone(event.target.value) 
    };
    const handleAddContact=()=>{
        console.log(phone, name);
        onSubmit(name,phone)

    };
    return(
        <div>
             <div className="flex gap-x-4">
               <div>
                <div>Name</div>

                 <input onChange={handleNameChange} className="border" type="text" placeholder="name"/>
               </div>
                <div>
                <div>Phone</div>

                 <input onChange={handlePhoneChange} className="border" type="text" placeholder="contact"/>
               </div>
        <Button onpress={handleAddContact}>Add contact +</Button></div>
        </div>

    );
}