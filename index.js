function createContact(lastName, firstName, phone, mail){
    /*// declaration / initialisation
    const divContact = document.createElement('div');
    const h1nomPrenom = document.createElement('h2'); 
    const h4Coord = document.createElement('h4'); 
    const pDesc = document.createElement('p'); 
    
    // config
    divContact.className ='contact'; 
    h1nomPrenom.textContent = `${lastName.toUpperCase()} ${firstName}`;
    h4Coord.textContent = `tel : ${phone}  mail : ${mail}`;
    pDesc.textContent ="Lorem dolor sit amet consectetur adipisicing elit. Itaque numquam et molestias asperiores? Voluptatum modi aspernatur iste delectus temporibus suscipit harum sapiente ducimus, esse, similique pariatur totam a aliquam reicie";
    
    //imbrication
    divContact.appendChild(h1nomPrenom);
    divContact.appendChild(h4Coord);
    divContact.appendChild(pDesc);
    
    // ajout dans la page html
    document.querySelector('#rep').appendChild(divContact); */


//equivalence du code dessus pour creer la fonction
document.querySelector('#rep').innerHTML += `
<div class="contact">
    <h2>${lastName.toUpperCase()} ${firstName}</h2>
    <h4>tel : ${phone}  mail : ${mail}</h4>
    <p>Lorem dolor sit amet consectetur adipisicing elit. Itaque numquam et molestias asperiores? Voluptatum modi aspernatur iste delectus temporibus suscipit harum sapiente ducimus, esse, similique pariatur totam a aliquam reicie
    </p>
</div>

`; 

}
createContact('Dupont', 'Claude', '04.33.25.55.25', 'claude@smail.com'); 
createContact('Sanchez','MArie', '16.22.23.25.25', 'marie@vhqs.com' ); 



