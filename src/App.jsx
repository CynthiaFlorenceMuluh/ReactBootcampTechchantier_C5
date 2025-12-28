import {useState} from 'react';
import Logo from './component/Logo'
import AddContactForm from './component/AddcontactForm'
import Button from './component/Button';

const initialContact=[
  // {name:'cynthia',phone:'349482726'},
  // {name:'steve',phone:'374589993'},
  // {name:'blaise',phone:'365874345'},
];

function App() {
  const[contactList, setContactList]= useState(initialContact);
  const [query, setQuery]= useState('')
  const [edit, setEdit]=useState("");

   const submit=(name, phone) => {
    console.log(name,phone,'From App Component')
    const newContact={name: name, phone: phone, id:Date.now()}
    const newContactList= [newContact, ...contactList]
    setContactList(newContactList)

   };
   const filteredContact= contactList.filter((contact)=>{
  return contact.name.toLowerCase().includes(query)
})
   const deleteContact=(id)=>{
    const newArray= contactList.filter((contact)=>{
      return contact.id !==id
    })
    setContactList(newArray)
   };
   const handleSearch=((event)=>{
    const value = event.target.value.toLowerCase()
    setQuery(value)

 
});
const handleEdit=((event)=>{
setEdit(event.target.value);

 
});
 return (
  
     <div className='bg-indigo-950 p-10 border h-300 m-3 text-white rounded-md' >
      <Logo/>
    
    <AddContactForm onSubmit={submit}/>
    <input type="text" onChange={handleSearch} placeholder='search' className='border w-full my-4'/>

    {filteredContact.map((contact, index) =>{
    return(
      <div key={index} className='border-b flex'>
        <div>{contact.name}</div>
        <div>{contact.phone}</div>
         <div className='ml-auto p-5'>
           <Button onpress={()=>handleEdit(contact.id)}>Edit</Button>
        </div>
        <div className='ml-auto p-5'>

         
        <Button onpress={()=>deleteContact(contact.id)}>Delete</Button>

        </div>
       
      </div>
    )}
    )}  
    
  </div> 

  );
}

export default App
