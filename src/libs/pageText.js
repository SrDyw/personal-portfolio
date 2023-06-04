const spanish_text = {
    "Home": "Inicio",
    "About": "Acerca",
    "Skills": "Habilidades",
    "Projects": "Proyecto",
    "Games": "Videojuegos",
    "App" : "Aplicaciones",
    "Hello": "¡Hola!",
    "Programmer": "Soy Programador",
    "WelcomeInfo": '"Como programador estaré encatado de darle una solucion informatica sujeta a la peticion de usted como cliente"',
    "BtnExp" : "Expolar",
    "BtnCV": "Ver CV",
    "AboutMe": "Ejerzo como programador desde finales de 2019 con varios proyectos desarrollados. Actualemnte  me encuentro estudiando en La Universidad de Ciencias Informáticas de Cuba para una  formación más completa y profesional como ingeniero informático."
}

const english_text = {
    "Home" : "Home",
    "About": "About",
    "Skills" : "Skills",
    "Projects" : "Projects",
    "Games" : "Videogames",
    "App" : "Applications",
    "Hello": "Hey there!",
    "Programmer": "I'm Programmer",
    "WelcomeInfo": '"As a programmer I will be happy to give you a computer solution subject to your request as a client"',
    "BtnExp" : "Explore",
    "BtnCV": "See CV",
    "AboutMe": "I have been working as a programmer since late 2019, with several projects developed. Currently, I am studying at the University of Computer Sciences of Cuba for a more comprehensive and professional education as a computer engineer."
}

export const getText = (key, len) => {
    return len === 'es' ? spanish_text[key] : english_text[key];
}