// List of available locales
const availableLocales = ["en", "es"];

// Default locale.
const defaultLanguage = "es";
localStorage.setItem("selected-language", defaultLanguage);
let pageLanguage = localStorage.getItem("selected-language") || defaultLanguage;

const htmlElement = document.querySelector("html");

const languageSelector = document.querySelector("#language-selector");

languageSelector.value = pageLanguage;

languageSelector.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  console.log(selectedLanguage);
  pageLanguage = selectedLanguage;
  htmlElement.setAttribute("lang", pageLanguage);

  // Get JSON object of translations for the selected language.
  const json = locales[pageLanguage];

  // Update all page elements with the translations for the selected language.
  elements.forEach((element, index) => {
    const key = element.getAttribute("data-i18n");
    let text = key.split(".").reduce((obj, i) => (obj ? obj[i] : null), json);

    // Check for variables in the text and replace them if necessary.
    const variables = text.match(/{(.*?)}/g);
    if (variables) {
      variables.forEach((variable) => {
        Object.entries(element.dataset).filter(([key, value]) => {
          if (`{${key}}` === variable) {
            try {
              text = text.replace(
                `${variable}`,
                new Function(`return (${value})`)()
              );
            } catch (error) {
              text = text.replace(`${variable}`, value);
            }
          }
        });
      });
    }

    // Update the text content of the element with the translated text.
    element.innerHTML = text;
  });
});


const resumeDownloadLink = document.getElementById('resume-download');

// Función para actualizar el enlace de descarga según el idioma seleccionado
function updateResumeDownloadLink(language) {
    if (language === 'en') {
        // Si es inglés, establece el enlace de descarga para el currículum en inglés
        resumeDownloadLink.setAttribute('href', 'Certificados/AlbertoSolanoVillaltaResume.pdf');
    } else if (language === 'es') {
        // Si es español, establece el enlace de descarga para el currículum en español
        resumeDownloadLink.setAttribute('href', 'Certificados/CV_AlbertoSolanoVillalta.pdf');
    }
}

// Evento que se activa cuando se cambia el idioma
languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    // Actualiza el enlace de descarga según el nuevo idioma seleccionado
    updateResumeDownloadLink(selectedLanguage);
});

// Ejecuta la función de actualización del enlace de descarga cuando la página se carga por primera vez
window.addEventListener('DOMContentLoaded', () => {
    const initialLanguage = languageSelector.value; // Obtiene el idioma seleccionado inicialmente
    updateResumeDownloadLink(initialLanguage);
});

// Locale translations.
const locales = {
  // EN
  en: {
    header: {
      nav_options: {
        home: "Home",
        about: "About",
        skills: "Skills",
        resume:"Resume",
        portfolio: "Portfolio",
        contact: "Contact",
      },
    },
    home: {
      greeting: "Hello, I'm",
      software_engineer: "Software Engineer",
      language:"Select Language:"
    },
    about:{
      title: "About",
      description:"Software developer, with experience in languages such as C# and Java for back-end development, and in front-end, with technologies like React, Angular, and JavaScript; Additionally, proficiency in relational and non-relational databases."
    },
    skills:{
      title: "Skills",
      description:"I have experience in different individual and group projects with different technologies and databases."
    },
    resume:{
      title: "Resume",
      btn:"Download",
      education:{
        title:"Education",
        titleItem:"Diploma, Information Technology",
        place:"University College of Cartago, CR",
        degre:"Bachelor's Degree, Software Development Engineering",
        date:"2021 - actuality",
        cenfoName:"Cenfotec University, CR"
      },
      experience:{
        title:"Professional Experience",
        wolksoft:{
          title:"Internship contract - Software Engineer",
          date:"Mar. 2021 - May 2021", 
          p1:"Enhanced System Solutions by seamlessly integrating the Facebook Marketplace API into a point of sale system, resulting in a significant boost in company productivity", 
          p2:"Thoroughly documented API usage, offering concise and comprehensive instructions for setup and operation.",
          p3:"Implemented a user-friendly pre-registration feature on the web store, allowing customers to register in advance of making purchases.",
          p4:"Proficient in API development using C# (.NET), SQL Server, Vue.js, and HTML5."
        },
        freelance:{
          title:"Freelance - Software Engineer",
          date:"Feb 2024", 
          p1:"Implemented reusable and modular components to maintain clean and easily maintainable code.",
          p2:"Employed Redux for managing the application state, allowing for efficient handling of data in the UI.",
          p3:"Designed and developed RESTful APIs to enable communication between the frontend and backend of the application.",
          p4:"Handled integration with databases, using MySQL to store and manage application data efficiently and reliably.",
          p5:"Used Git to collaborate on code development and manage application versions. Technologies used: Java (Spring Boot), MySQL and React.js."
        }
      }
    },
    projects: {
      title: "Portfolio",
      filter:{
        section1:"All"
      },
      dataStructure:{
        title:"Data Structures List C++",
        info:"C++ project, which uses different types of simple lists and double lists, as well as multilists."
      },
      cinema:{
        title:"Cinema Page Project",
        info:"Project in which different cinemas can register and add and manage their theaters, movies and schedules, the customer can buy the functions by selecting the schedule and seats, in addition to selecting the cinema."
      },
      zhenair:{
        title:"ZhenAir",
        info:"Software and hardware solution consisting of a web application and a portable device aimed at monitoring and assessing real-time air quality. The web application will enable users to manage user profiles, allowing them to view detailed data and receive alerts. The portable device, on the other hand, will be responsible for collecting air quality data using advanced sensors."
      },
      classroom:{
        title:"Classroom to Schedule Assignor Project",
        info:"Project which reads an Excel with the data of schedules, subjects and teachers, performs a process of automatic assignment to a classroom for each subject, plus the option to do it manually. In addition, the options for students and teachers to view their schedule and their classes assigned to the subjects."
      },
      lab:{
        title:"Laboratories administrator Project",
        info:"Api and front-end project, project in which laboratories can be registered to register appointments and send exams to registered customers, it has dashboards for laboratories and different roles."
      },
      rpg:{
        title:"RPG game",
        info:"Rpg game, the LibGDX game engine was used, it has different screens, collisions with objects, purchase of objects and battle function. It was made using different patterns of behavioral programming, creative and structural."
      },
      car:{
        title:"Car maintenance services",
        info:"Project which seeks to make the functionality of Strartyoshi's company, Strartyoshi is an automobile service system, which provides display options for business owners and for customers to add their vehicles and order services to different locations."
      },
      btn:"View"
    },
    contact: {
      title:"Contact",
      name: "Nombre Completo",
      description: "Descripción",
      email:"Email",
      btn:"Send"
    },
  },

  // ES
  es: {
    header: {
      nav_options: {
        home: "Inicio",
        about: "Acerca de",
        skills: "Habilidades",
        resume: "Currículum",
        portfolio: "Portafolio",
        contact: "Contacto"
      }
    },
    home: {
      greeting: "Hola, soy",
      software_engineer: "Ingeniero de Software",
      language: "Seleccionar Idioma:"
    },
    about: {
      title: "Acerca de",
      description: "Desarrollador de software, con experiencia en lenguajes como C# y Java para desarrollo backend, y en frontend, con tecnologías como React, Angular y JavaScript; Además, competencia en bases de datos relacionales y no relacionales."
    },
    skills: {
      title: "Habilidades",
      description: "Tengo experiencia en diferentes proyectos individuales y grupales con diferentes tecnologías y bases de datos."
    },
    resume: {
      title: "Currículum",
      btn: "Descargar",
      education: {
        title: "Educación",
        titleItem: "Diploma, Tecnología de la Información",
        place: "Colegio Universitario de Cartago, CR",
        degre: "Ingeniería en Desarrollo de Software",
        date: "2021 - actualidad",
        cenfoName: "Universidad Cenfotec, CR"
      },
      experience: {
        title: "Experiencia Profesional",
        wolksoft: {
          title: "Contrato de prácticas - Ingeniero de Software",
          date: "Mar. 2021 - May. 2021",
          p1: "Mejoré soluciones del sistema integrando sin problemas la API de Facebook Marketplace en un sistema de punto de venta, lo que resultó en un impulso significativo en la productividad de la empresa.",
          p2: "Documenté minuciosamente el uso de la API, ofreciendo instrucciones concisas y completas para la configuración y operación.",
          p3: "Implementé una función de preinscripción amigable para el usuario en la tienda web, permitiendo a los clientes registrarse antes de realizar compras.",
          p4: "Competente en el desarrollo de API utilizando C# (.NET), SQL Server, Vue.js y HTML5."
        },
        freelance: {
          title: "Freelance - Ingeniero de Software",
          date: "Feb. 2024",
          p1: "Implementé componentes reutilizables y modulares para mantener un código limpio y fácilmente mantenible.",
          p2: "Utilicé Redux para gestionar el estado de la aplicación, lo que permitió un manejo eficiente de los datos en la interfaz de usuario.",
          p3: "Diseñé y desarrollé API RESTful para habilitar la comunicación entre el frontend y el backend de la aplicación.",
          p4: "Manejé la integración con bases de datos, utilizando MySQL para almacenar y gestionar datos de la aplicación de manera eficiente y confiable.",
          p5: "Usé Git para colaborar en el desarrollo de código y gestionar versiones de la aplicación. Tecnologías utilizadas: Java (Spring Boot), MySQL y React.js."
        }
      }
    },
    projects: {
      title: "Portafolio",
      filter: {
        section1: "Todos"
      },
      dataStructure: {
        title: "Lista de Estructuras de Datos en C++",
        info: "Proyecto en C++ que utiliza diferentes tipos de listas simples, listas dobles y listas múltiples."
      },
      cinema: {
        title: "Proyecto de Página de Cine",
        info: "Proyecto en el que diferentes cines pueden registrarse y agregar y administrar sus teatros, películas y horarios. El cliente puede comprar las funciones seleccionando el horario y los asientos, además de seleccionar el cine."
      },
      zhenair: {
        title: "ZhenAir",
        info: "Solución de software y hardware que consta de una aplicación web y un dispositivo portátil destinado a monitorear y evaluar la calidad del aire en tiempo real. La aplicación web permitirá a los usuarios administrar perfiles de usuario, lo que les permitirá ver datos detallados y recibir alertas. Por otro lado, el dispositivo portátil será responsable de recopilar datos sobre la calidad del aire utilizando sensores avanzados."
      },
      classroom: {
        title: "Proyecto de Asignador de Aulas",
        info: "Proyecto que lee un Excel con los datos de horarios, materias y profesores, realiza un proceso de asignación automática a un aula para cada materia, además de la opción de hacerlo manualmente. Además, las opciones para que los estudiantes y profesores vean su horario y sus clases asignadas a las materias."
      },
      lab: {
        title: "Proyecto de Administrador de Laboratorios",
        info: "Proyecto de API y frontend, proyecto en el que se pueden registrar laboratorios para registrar citas y enviar exámenes a clientes registrados, tiene paneles para laboratorios y roles diferentes."
      },
      rpg: {
        title: "Juego de Rol (RPG)",
        info: "Juego de rol, se utilizó el motor de juego LibGDX, tiene diferentes pantallas, colisiones con objetos, compra de objetos y función de batalla. Se realizó utilizando diferentes patrones de programación conductual, creativa y estructural."
      },
      car: {
        title: "Servicios de Mantenimiento de Automóviles",
        info: "Proyecto que busca hacer la funcionalidad de la empresa Strartyoshi, Strartyoshi es un sistema de servicios automotrices, que proporciona opciones de visualización para los propietarios de empresas y para que los clientes agreguen sus vehículos y soliciten servicios a diferentes ubicaciones."
      },
      btn: "Ver"
    },
    contact: {
      title: "Contacto",
      name: "Nombre Completo",
      description: "Descripción",
      email: "Correo Electrónico",
      btn: "Enviar"
    }
  }
};

// Get all page elements to be translated.
// Obtén todos los elementos de la página que deben ser traducidos
let elements = Array.from(document.querySelectorAll("[data-i18n]"));

// Agrega el elemento de la clase "typed" manualmente si no está incluido en la lista "elements"
const typedElement = document.querySelector(".typed");
if (typedElement) {
    typedElement.setAttribute("data-i18n", "home.software_engineer");
    elements.push(typedElement);
}

// Set <html> tag lang attribute.
htmlElement.setAttribute("lang", pageLanguage);



// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  const key = element.getAttribute("data-i18n");
  let text = key
    .split(".")
    .reduce((obj, i) => (obj ? obj[i] : null), locales[pageLanguage]);
    console.log(key)
  // Does this text have any variables? (eg {something})
  const variables = text.match(/{(.*?)}/g);
  if (variables) {
    // Iterate each variable in the text.
    variables.forEach((variable) => {
      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(element.dataset).filter(([key, value]) => {
        if (`{${key}}` === variable) {
          try {
            // Attempt to run actual JavaScript code.
            text = text.replace(
              `${variable}`,
              new Function(`return (${value})`)()
            );
          } catch (error) {
            // Probably just static text replacement.
            text = text.replace(`${variable}`, value);
          }
        }
      });
    });
  }

  // Regular text replacement for given locale.
  element.innerHTML = text;
});
