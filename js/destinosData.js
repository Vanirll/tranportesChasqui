const destinosData = [
    // "La Libertad"
    {
        nombre: "Trujillo",
        descripcion: "Descubre Trujillo, la ciudad de la eterna primavera, famosa por su cultura, historia y marinera.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Freedom_Monument%2C_Trujillo.jpg/1024px-Freedom_Monument%2C_Trujillo.jpg",
        precio: "S/. 40.00",
        duracion: "2 horas",
        horarios: ["08:00", "14:00", "18:00"]
    },
    {
        nombre: "Chiclayo",
        descripcion: "La ciudad de la amistad, reconocida por su historia precolombina, museos y deliciosa comida norteña.",
        precio: "S/. 60.00",
        imagen: "https://www.usat.edu.pe/web/wp-content/uploads/2024/04/aniversario-de-chiclayo.jpg",
        duracion: "3 horas",
        horarios: ["07:30", "12:00", "06:00"]
    },
    {
        nombre: "Chimbote",
        descripcion: "El principal puerto pesquero del país, conocido por su bahía, islas y deliciosa comida marina.",
        precio: "S/. 45.00",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Plaza_de_armas_de_Chimbote_01.jpg/1024px-Plaza_de_armas_de_Chimbote_01.jpg",
        horarios: ["05:00 AM","11:00 AM", "04:30 PM"
        ],
    },

    // "Arequipa"
    {
        nombre: "Arequipa",
        descripcion: "La ciudad blanca del sur peruano, rodeada de volcanes y llena de historia.",
        imagen: "https://media.vogue.mx/photos/5e5c4abe25623100081c4374/master/w_1600%2Cc_limit/Arequipa--plaza--centro.jpg",
        precio: "S/. 90.00",
        duracion: "10 horas",
        horarios: ["06:00", "12:00", "22:00"]
    },
    // "Lima"
    {
        nombre: "Lima",
        descripcion: "La capital del Perú, moderna y llena de historia, famosa por su gastronomía y su costa sobre el Pacífico.",
        imagen: "https://www.infobae.com/resizer/v2/XJ6ON4Q6RFEHFCFWYE7QHZEAIQ.jpg?auth=2677fe511fcbae5f7dbf3a9312dd966fcd54a4ef2fa6c9540c9cb23fab3c1a9c&smart=true&width=992&height=558&quality=85",
        precio: "S/. 50.00",
        duracion: "3 horas",
        horarios: ["09:00", "15:00", "19:00"]
    },
    // "Cusco"
    {
        nombre: "Cusco",
        descripcion: "Antigua capital del Imperio Inca, puerta de entrada a Machu Picchu y el Valle Sagrado.",
        imagen: "https://www.peruhike.com/wp-content/uploads/2020/10/Cusco-City-Tour-8-1000x500.jpg",
        precio: "S/. 120.00",
        duracion: "8 horas",
        horarios: ["07:00", "13:00", "20:00"]
    },
    // "Piura"
    {
        nombre: "Piura",
        descripcion: "Ciudad cálida y acogedora, famosa por sus playas y su cultura norteña.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Catedral_de_Piura.jpg",
        precio: "S/. 80.00",
        duracion: "6 horas",
        horarios: ["08:00", "14:00", "18:00"]
    },
    // "Lambayeque"
    {
        nombre: "Chiclayo",
        descripcion: "La ciudad de la amistad, conocida por su gastronomía y los tesoros de Sipán.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Catedral_de_Chiclayo.jpg",
        precio: "S/. 70.00",
        duracion: "5 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "Loreto"
    {
        nombre: "Iquitos",
        descripcion: "La mayor ciudad de la Amazonía peruana, solo accesible por río o aire, rodeada de selva.",
        imagen: "https://rutasturisticas.pe/wp-content/uploads/2022/08/lugares-para-visitar-en-iquitos.jpg",
        precio: "S/. 150.00",
        duracion: "12 horas",
        horarios: ["06:00", "12:00", "18:00"]
    },
    // "Puno"
    {
        nombre: "Puno",
        descripcion: "A orillas del lago Titicaca, famosa por sus festividades y cultura altiplánica.",
        imagen: "https://www.hotelkatari.com/wp-content/uploads/2025/03/PLAZA-MAYOR-DE-PUNO.jpg",
        precio: "S/. 110.00",
        duracion: "7 horas",
        horarios: ["07:00", "13:00", "19:00"]
    },
    // "Junín"
    {
        nombre: "Huancayo",
        descripcion: "Corazón del Valle del Mantaro, conocida por su folclore y paisajes andinos.",
        imagen: "https://urbania.pe/blog/wp-content/uploads/2025/01/imovelwebcomunicacaoltda_quintoandarperu_image_636.jpeg",
        precio: "S/. 85.00",
        duracion: "6 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "Ayacucho"
    {
        nombre: "Ayacucho",
        descripcion: "Ciudad de las 33 iglesias, famosa por su Semana Santa y su historia colonial.",
        imagen: "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/13172228/arco-ayacucho.jpg",
        precio: "S/. 95.00",
        duracion: "7 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "Tacna"
    {
        nombre: "Tacna",
        descripcion: "Ciudad heroica del sur, conocida por su historia y su cercanía a la frontera con Chile.",
        imagen: "https://peru.info/archivos/publicacion/178-imagen-930171942022.jpg",
        precio: "S/. 100.00",
        duracion: "8 horas",
        horarios: ["07:00", "13:00", "19:00"]
    },
    // "Tumbes"
    {
        nombre: "Tumbes",
        descripcion: "Puerta de entrada al norte, famosa por sus manglares y playas tropicales.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3oy0EKFUk5ATgBS5iIXPQngNERq_AtLHPYiOuuWDvjWHHG37bYZ5IL7ACm-wT0wPdDe_FA7m0RNYfr7jRApgla9VODAihm-f3D-FGSBV03vj3v8Na-p2hyAROzwvEKMT-cYLyRMVmpOg/w1200-h630-p-k-no-nu/tumbes.jpg",
        precio: "S/. 130.00",
        duracion: "10 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "Cajamarca"
    {
        nombre: "Cajamarca",
        descripcion: "Escenario del encuentro de dos mundos, famosa por sus baños termales y carnavales.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Plaza_de_cajamarca.jpg/640px-Plaza_de_cajamarca.jpg",
        precio: "S/. 90.00",
        duracion: "6 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "Moquegua"
    {
        nombre: "Moquegua",
        descripcion: "Ciudad tranquila del sur, conocida por sus viñedos y clima agradable.",
        imagen: "https://peru.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Peru/social-media-image/moquegua-redes.jpeg",
        precio: "S/. 105.00",
        duracion: "7 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "Huánuco"
    {
        nombre: "Huánuco",
        descripcion: "Ciudad de clima primaveral, rodeada de montañas y rica en historia.",
        imagen: "https://www.netravel.pe/wp-content/uploads/2018/10/Visita-iglesias-huanuco.jpg",
        precio: "S/. 80.00",
        duracion: "5 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "Ucayali"
    {
        nombre: "Pucallpa",
        descripcion: "Capital de Ucayali, puerta de entrada a la selva central y el río Ucayali.",
        imagen: "https://i.ytimg.com/vi/-rszcJDAUoI/maxresdefault.jpg",
        precio: "S/. 140.00",
        duracion: "9 horas",
        horarios: ["07:00", "13:00", "19:00"]
    },
    // "Madre de Dios"
    {
        nombre: "Puerto Maldonado",
        descripcion: "Capital de Madre de Dios, punto de partida para explorar la selva amazónica.",
        imagen: "https://sotupa.pe/wp-content/uploads/2022/08/destacado-atractivos-turisticos-puerto-maldonado.jpg",
        precio: "S/. 160.00",
        duracion: "11 horas",
        horarios: ["06:00", "12:00", "18:00"]
    },
    // "Áncash"
    {
        nombre: "Huaraz",
        descripcion: "Capital de la región Áncash, famosa por la Cordillera Blanca y el Parque Nacional Huascarán.",
        imagen: "https://content.r9cdn.net/rimg/dimg/17/1d/38963bbb-city-58607-173326d42bf.jpg?width=1200&height=630&xhint=2671&yhint=1747&crop=true",
        precio: "S/. 100.00",
        duracion: "8 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "Ica"
    {
        nombre: "Ica",
        descripcion: "Ciudad del sol y el vino, famosa por la Huacachina y sus viñedos.",
        imagen: "https://propuestapais.pe/wp-content/uploads/2019/10/Ica-1024x511.jpg",
        precio: "S/. 95.00",
        duracion: "6 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "San Martín"
    {
        nombre: "Tarapoto",
        descripcion: "Ciudad de las palmeras, conocida por sus cataratas y naturaleza exuberante.",
        imagen: "https://heidi-schade-fotografie.de/wp-content/uploads/2014/07/Tarapoto-Laguna-Azul-05-1024x575.jpg",
        precio: "S/. 120.00",
        duracion: "8 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "San Martín"
    {
        nombre: "Moyobamba",
        descripcion: "La ciudad de las orquídeas, capital de San Martín, rodeada de naturaleza y aguas termales.",
        imagen: "https://cdn.www.gob.pe/uploads/document/file/3108903/1234567777.jpg.jpg",
        precio: "S/. 110.00",
        duracion: "7 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "Pasco"
    {
        nombre: "Cerro de Pasco",
        descripcion: "La ciudad más alta del Perú, famosa por su historia minera y su clima frío.",
        imagen: "https://images.adsttc.com/media/images/62e8/3957/95a5/5101/66f1/72ed/newsletter/el-caso-de-cerro-de-pasco-una-ciudad-que-desaparece-por-la-mineria_1.jpg?1659386243",
        precio: "S/. 115.00",
        duracion: "8 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "Apurímac"
    {
        nombre: "Abancay",
        descripcion: "Capital de Apurímac, rodeada de montañas y conocida por su clima agradable.",
        imagen: "https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Abancay-Plaza-principal-2.jpg",
        precio: "S/. 105.00",
        duracion: "7 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "Amazonas"
    {
        nombre: "Chachapoyas",
        descripcion: "Capital de Amazonas, famosa por la fortaleza de Kuélap y su entorno natural.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Chachapoyas.jpg",
        precio: "S/. 130.00",
        duracion: "9 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "Loreto"
    {
        nombre: "Yurimaguas",
        descripcion: "Ciudad portuaria de Loreto, punto de partida para explorar la selva baja.",
        imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/47/1c/80/img-20191212-120618-largejpg.jpg?w=900&h=500&s=1",
        precio: "S/. 125.00",
        duracion: "8 horas",
        horarios: ["09:00", "15:00", "21:00"]
    },
    // "Huánuco"
    {
        nombre: "Tingo María",
        descripcion: "Ciudad de la Bella Durmiente, rodeada de naturaleza y cuevas impresionantes.",
        imagen: "https://inforegion.net.pe/images/2024/05/03/Lanzan-marca-Tingo-Maria-para-promocionar-cultura-y-atractivos-turisticos-3.webp",
        precio: "S/. 115.00",
        duracion: "7 horas",
        horarios: ["08:00", "14:00", "20:00"]
    },
    // "Huancavelica"
    {
        nombre: "Huancavelica",
        descripcion: "Ciudad andina famosa por su historia minera y tradiciones culturales.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Panor%C3%A1mica_de_Huancavelica.jpg/1200px-Panor%C3%A1mica_de_Huancavelica.jpg",
        precio: "S/. 85.00",
        duracion: "7 horas",
        horarios: ["08:00", "14:00", "20:00"]
    }

    // Puedes agregar más destinos de todos los departamentos del Perú aquí siguiendo el mismo formato

    

];


