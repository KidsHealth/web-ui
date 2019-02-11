//var obj = ; // Aqui el documento JSON que se devulve.

/*
if (obj.getElementById("rol").innerHTML == "tutor") {
    document.getElementById("op2").innerHTML = "Menores";
}
*/
// if (obj.getElementById("rol").innerHTML == "doctor") {
//     document.getElementById("op2").innerHTML = "Pacientes";
// }

function cargarInicio(){
    document.getElementById("section-title").innerHTML = "inicio";
    // Implementar más...
    document.getElementById("sep").style.display = "inherit";
    document.getElementById("section-content").innerHTML = 'Bienvenido a tu página principal de KidsHealth. En esta sección encontrarás un resumen global de tu perfil:<br><br>'+
        '<div class="detalle">'+
        'Nombre de usuario:<br><div id="username">' + sessionStorage.getItem("name") +
        ' ' + sessionStorage.getItem("surname") + '</div><br>'+
        'Email de contacto:<br><div id="email"></div>' + sessionStorage.getItem("email") + '<br>'+
        '<h4>PACIENTES:</h4><div id="patients"></div>' +
        '<hr>'+
        '<h4>Mensajes nuevos:</h4>' +
        '<div id="messages"></div>' +
        '</div>';

    let patients = document.getElementById("patients");
    let messages = document.getElementById("messages");

    fetch("http://localhost:8080/kidshealth/api/user/" + sessionStorage.getItem("id") + "/patient")
    .then(res => res.json()).then(d => {
        for (p of d) {
            patients.innerHTML += "<div><a href='#' onclick='cargarPaciente(" + p.id + ")'>" + p.name + " " + p.surname + "</a></div>"
        }
    });

    fetch("http://localhost:8080/kidshealth/api/user/" + sessionStorage.getItem("id") + "/message")
    .then(res => res.json()).then(d => {
        for (m of d) {
            if (m.messages.length == 0) continue;
            let helpmessage = m.messages[0].isDoctorTheSender ? "el doctor dijo" : "tú dijiste"
            messages.innerHTML += "<div>[" + m.messages[0].sendedAt + "] Sobre <b>" + m.patient.name + " " + m.patient.surname + "</b>, " + 
            helpmessage + ": " + m.messages[0].body + "</div>"
        }
    });
}

function cargarPacMen(){
    document.getElementById("sep").style.display = "inherit";
    
    document.getElementById("section-title").innerHTML = "Pacientes";
    /*if (obj.getElementById("rol").innerHTML == "doctor") {
        document.getElementById("section-title").innerHTML = "Pacientes";
        // Implementar más...
    if (obj.getElementById("rol").innerHTML == "tutor") {
        document.getElementById("section-title").innerHTML = "Menores";
        // Implementar más...
    }*/
    document.getElementById("section-content").innerHTML = 'En la sección de pacientes encontrará a sus pacientes asignados:<br><br>'+
        '<div class="detalle">'+
        '<h4>PACIENTES:</h4>'+
        '<a href=getPaciente("489755615F")>María Luz Carbonel Sánchez</a><br>'+
        '<a href=getPaciente("478152648H")>Lucas Andacielos Medina</a><br>'+
        '<a href=getPaciente("678124596Y")>Estefanía Romero Campos</a><br>'+
        '<hr>'+
        '</div>';
}

function cargarCitas(){
    document.getElementById("section-title").innerHTML = "Citas";
    // Implementar más...
    document.getElementById("sep").style.display = "inherit";
        document.getElementById("section-content").innerHTML = 'En la sección de citas encontrará información relevante a sus próximas citas:<br><br>'+
        '<div class="detalle">'+
        '<center><img src="img/nomsg.png" class="img-responsive" alt=""></center> '+
        '<hr>'+
        '<div class="container-contacto">'+
        'Para solicitar una cita, por favor rellene con sus datos:<br>'+
        '<form action=solicitarCita(paciente,cita) method="GET">'+
        
        '<input type="text" id="fname" name="nombre" placeholder="Nombre" style="text-align:left">'+
        '<input type="text" id="lapellidos" name="apellidos" placeholder="Apellidos" style="text-align:left">'+

        '<input type="submit" value="Solicitar cita" >'+
        '</form>'+
        '</div>';
}

function cargarBuzon(){
    document.getElementById("section-title").innerHTML = "Buzón de Mensajes";
    // Implementar más...
    document.getElementById("sep").style.display = "inherit";
    document.getElementById("section-content").innerHTML = "No tiene mensajes en su buzón de entrada.";
}

function cargarAyuda(){
    document.getElementById("section-title").innerHTML = "Ayuda y contacto";
    // Implementar más...
    document.getElementById("sep").style.display = "inherit";
    document.getElementById("section-content").innerHTML =
        'Si quieres contactarnos por favor rellena los campos con tus datos y tu consulta. Gracias y que la fuerza te acompañe: <br>'+
        '<div class="container-contacto">'+
            '<form action="mailto:support@kidshealth.com" method="GET">'+
                
                '<input type="text" id="fname" name="nombre" placeholder="Nombre" style="text-align:left">'+
                '<input type="text" id="lapellidos" name="apellidos" placeholder="Apellidos" style="text-align:left">'+

                '<textarea id="asunto" name="asunto" placeholder="Cuéntanos..."></textarea>'+
                '<input type="submit" value="Enviar" >'+
            '</form>'+
        '</div>';
}