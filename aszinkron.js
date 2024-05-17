export function getAdat(vegpont, callback) {
  fetch(vegpont, { 
    method: "GET" 
    })
    .then((response) => response.json()) //nevtelen fuggveny, ha megerkezett a avalasz olvassa ki a json adatot
    .then((data) => callback(data)) //ha megvan ezaz adat akkor olvassa ki az adatot vagyis irja ki
    .catch((error) => console.log(error)); //ha barmely ponton elakadt ez, akkor itt is nevtelen fuggveny, bemegy ebbe a catch agba, hibauzeneteket fog megadni
}

export function postAdat(vegpont, adat) {
  fetch(vegpont, { 
    method: "POST" ,
    body: JSON.stringify(adat), // adat objektumunkat atalakitja json szovegge es ez fog majd atkenni a halozaton
    })
    .then((response) => response.json()) 
    .then((data) => callback(data)) 
    .catch((error) => console.log(error)); 
}

export function deleteAdat(vegpont, id) {
  fetch(vegpont+"/"+id, {  // pl embereklista/5 tehat az 5s elemet fogjuk torolni
    method: "DELETE" ,
    })
    .then((response) => response.json()) 
    .then((data) => callback(data)) 
    .catch((error) => console.log(error)); 
}

export function putAdat(vegpont, adat, id) {
  fetch(vegpont+"/"+id, { 
    method: "PUT" ,
    body: JSON.stringify(adat), // adat objektumunkat atalakitja json szovegge es ez fog majd atkenni a halozaton
    })
    .then((response) => response.json()) 
    .then((data) => callback(data)) 
    .catch((error) => console.log(error)); 
  }


