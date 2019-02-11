/**
 * Simulation of a log in.
 */

const users = [
    {
        id: 1,
        rol: "patientResponsible",
        email: "sosa@uma.es",
        password: "sosa",
        name: "Miguel",
        surname: "Gonzalez"
    },
    {
        id: 2,
        rol: "patientResponsible",
        email: "samdelfer@uma.es",
        password: "samdelfer",
        name: "Samuel",
        surname: "Delgado"
    },
    {
        id: 3,
        rol: "doctor",
        email: "cruzpazv@uma.es",
        password: "cruzpazv",
        name: "Victoria",
        surname: "Cruz"
    }
]

function inicioSesion(){
    var user = document.getElementById("usuario").value
    var pass = document.getElementById("password").value
    
    console.log(user);
    console.log(pass);
    
    if(user == "" || pass == ""){
        document.getElementById("warning-inicio").style.display = "inherit";
        document.getElementById("warning-inicio").style.backgroundColor = " #ff9999";
        document.getElementById("warning-inicio").innerHTML = "Error...";
        return;
    }else{        
        document.getElementById("warning-inicio").style.display = "inherit";
        document.getElementById("warning-inicio").style.backgroundColor = " #99ff99";
        document.getElementById("warning-inicio").innerHTML = "Iniciando sesión...";
    }

    let foundusers = users.filter(u => (u.email == user) && (u.password == pass))
    if (foundusers.length != 1) {
        document.getElementById("warning-inicio").style.display = "inherit";
        document.getElementById("warning-inicio").style.backgroundColor = " #ff9999";
        document.getElementById("warning-inicio").innerHTML = "Error...";
        return;
    }

    let founduser = foundusers[0]
    sessionStorage.setItem('email', founduser.email)
    sessionStorage.setItem('id', founduser.id)
    sessionStorage.setItem('name', founduser.name)
    sessionStorage.setItem('surname', founduser.surname)
    sessionStorage.setItem('rol', founduser.rol)

    location.href = "/"
}