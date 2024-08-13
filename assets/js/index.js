// La variable opción se Inicializa en 0
let opcion = 0;
// El ciclo While continuará ejecutando mientras la opción no sea 5
while (opcion !== 5) { 
    opcion = parseInt(prompt( // Ingreso de Usuario 
        "Menú de opciones:\n" +
        "1. Ver información\n" +
        "2. Configuración\n" +
        "3. Ayuda\n" +
        "4. Contacto\n" +
        "5. Salir\n" +
        "Selecciona una opción:"
    ));
// Centro de Mensajes de Alertas
mensaje1 = "Mostrando información de usuario";
mensaje2 = "Abriendo la configuración del usuario";
mensaje3 = "Nos Comunicamos en Breve con usted le brindamos la ayuda necesaria";
mensaje4 = "Mostrando información de contacto"
mensaje5 = "Saliendo del programa. Adios, Bye Bye" 
mensajePorDefecto = "Opción no válida. Por favor, selecciona una opción del 1 al 5."

// Evalua el ingreso de usuario caso a caso mostrando un alert de información
    switch(opcion) {
        case 1:
            alert(mensaje1);
            break;
        case 2:
            alert(mensaje2);
            break;
        case 3:
            alert(mensaje3);
            break;
        case 4:
            alert(mensaje4);
            break;
        case 5:
            alert(mensaje5);
            break;
        default:
            alert(mensajePorDefecto);
    }
}
