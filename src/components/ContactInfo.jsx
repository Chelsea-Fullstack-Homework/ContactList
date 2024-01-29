function ContactInfo({ contact, setSelectedContactId }){
    return (
        <>
        <h2>{contact.name}</h2>
        <ul>
        <li>Phone : {contact.phone}</li>
        <li>Email : {contact.email}</li>
        <li>Username : {contact.username}</li>
        <li>Website : {contact.website}</li>
        <li>Company Name : {contact.company.name}</li>
        </ul>
        <button type='button' onClick={()=>{setSelectedContactId(null)}}>Back</button>
        </>
    ) 
}

export default ContactInfo
