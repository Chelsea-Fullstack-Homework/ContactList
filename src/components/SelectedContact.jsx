import { useState } from 'react'
import { useEffect } from 'react'
import ContactInfo from './ContactInfo'

function SelectedContact({ selectedContactId, setSelectedContactId }){
    const [contact, setContact] = useState(null);

    useEffect(
        ()=>{
            async function fetchData() {
                try{
                    let url = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                    let response = await fetch(url);
                    let result = await response.json();
                    setContact(result);
                }catch(err){
                    console.error(err);
                }
            }
            fetchData()
        }
        ,[])

    return (
        <>
        {contact
        ? (<ContactInfo contact={contact} setSelectedContactId={setSelectedContactId}/>)
        : (<div>Loading...</div>)
        }
        </>
    )
}

export default SelectedContact
