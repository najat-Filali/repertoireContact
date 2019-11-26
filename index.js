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

document.forms.fac.addEventListener(
    'submit', 
    function (event){
        event.preventDefault(); //annule comportement par defaut(appelreseau par ex)
        createContact(
            this.lastName.value,
            this.firstName.value, 
            this.phone.value,
            this.email.value,
        ); 
        return false; // annule comportement par defaut
    }); 
 



