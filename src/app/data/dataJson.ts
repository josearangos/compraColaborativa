let defaultProds = {
    "user": {
        "name": "María Isabel Tabares Bernal",
        "isActive": true,
    },
    "products":[
        {
            "id":1,
            "status":"offer",
            "status_code":3,
            "name": "Resma Papel Carta Reprograf",
            "rating": 5,
            "price": "9.550",
            "minimunAmount": 800,
            "currentTotalAmount":780,
            "myAmount": 0,
            "description": "Papel de 75grs, libre de ácido, con alta blancura y resistencia hecho 100% de caña de azúcar y libre de cloro elemental.",
            "picture": "https://papelist.com/413-thickbox_default/resma-papel-carta-reprograf.jpg",
            "reviews":[
                {
                    "user": "Impresoras El Rey",
                    "logo": "https://storage.googleapis.com/google-code-archive/v2/code.google.com/plan9front/logo.png",
                    "rating": 5,
                    "comment": "La entrega se hizo en el tiempo estipulado, excelente servicio, verdaderamente fue un ahorro para mi organización."
                },
                {
                    "user": "Alberto's Copias",
                    "logo":"https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_Take_That.png",
                    "rating": 5,
                    "comment": "Súper bueno el papel, buen calibre, la entrega fue demasiado ágil."
                }
            ]
        },
        {
            "id":8,
            "status":"pay",
            "status_code":2,
            "name": "Notas Adhesivas 6 tacos colores x600 Kores",
            "rating": 4,
            "price": "12.618",
            "minimunAmount": 200,
            "currentTotalAmount":200,
            "myAmount": 50,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/313-thickbox_default/notas-adhesivas-6-tacos-colores-x600-kores.jpg",
            "reviews":[]
        },
        {
            "id":9,
            "status":"review",
            "status_code":1,
            "name": "Resaltador Flash Amarillo Pelikan",
            "rating": 4,
            "price": "1.430",
            "minimunAmount": 100,
            "currentTotalAmount":100,
            "myAmount": 40,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/344-thickbox_default/resaltador-flash-amarillo-pelikan.jpg",
            "reviews":[]
        },
        {
            "id":12,
            "status":"offer",
            "status_code":3,
            "name": "Caja Bolígrafo kilométrico 100  Negro x12",
            "rating": 4,
            "price": "5.718",
            "minimunAmount": 100,
            "currentTotalAmount":63,
            "myAmount": 20,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/398-thickbox_default/caja-boligrafo-kilometrico-100-negro-x12.jpg",
            "reviews":[]
        },
        {
            "id":2,
            "status":"no-offer",
            "status_code":4,
            "name": "Carpeta Celuguia Carta Horizontal Norma",
            "rating": 5,
            "price": "303",
            "minimunAmount": 400,
            "currentTotalAmount":150,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/77-thickbox_default/carpeta-celuguia-oficio-horizontal-norma.jpg",
            "reviews":[
               
            ]
        },
        {
            "id":3,
            "status":"no-offer",
            "status_code":4,
            "name": "Tinta para sellos frasco 30cc Negro",
            "rating": 3,
            "price": "2.969",
            "minimunAmount": 900,
            "currentTotalAmount": 750,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/172-thickbox_default/tinta-para-sellos-frasco-30cc-negro.jpg",
            "reviews":[
               
            ]
        },
        {
            "id":4,
            "status":"no-offer",
            "status_code":4,
            "name": "Sobre de Manila Oficio",
            "rating": 4,
            "price": "87",
            "minimunAmount": 900,
            "currentTotalAmount": 0,
            "myAmount":0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/266-thickbox_default/sobre-de-manila-carta-norma.jpg",
            "reviews":[
                
            ]
        },
        {
            "id":5,
            "status":"no-offer",
            "status_code":4,
            "name": "Sobre de Manila Carta Norma",
            "rating": 4,
            "price": "104",
            "minimunAmount": 8000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/265-thickbox_default/sobre-de-manila-carta-norma.jpg",
            "reviews":[]
        },
        {
            "id":6,
            "status":"no-offer",
            "status_code":4,
            "name": "Resma Papel Oficio Reprograf",
            "rating": 4,
            "price": "15.020",
            "minimunAmount": 8000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/404-thickbox_default/resma-papel-oficio-reprograf.jpg",
            "reviews":[]
        },
        {
            "id":7,
            "status":"no-offer",
            "status_code":4,
            "name": "Carpeta Celuguia Oficio Horizontal Norma",
            "rating": 4,
            "price": "303",
            "minimunAmount": 8000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/77-thickbox_default/carpeta-celuguia-oficio-horizontal-norma.jpg",
            "reviews":[]
        },
        {
            "id":10,
            "status":"no-offer",
            "status_code":4,
            "name": "Resaltador Flash Rosado Pelikan",
            "rating": 4,
            "price": "1.430",
            "minimunAmount": 8000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/342-thickbox_default/resaltador-flash-amarillo-pelikan.jpg",
            "reviews":[]
        },
        {
            "id":11,
            "status":"no-offer",
            "status_code":4,
            "name": "Caja Bolígrafo kilométrico 100 Azul Oscuro x12",
            "rating": 4,
            "price": "5.718",
            "minimunAmount": 8000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/399-thickbox_default/caja-boligrafo-kilometrico-100-azul-oscuro-x12.jpg",
            "reviews":[]
        },
        {
            "id":12,
            "status":"no-offer",
            "status_code":4,
            "name": "Caja Bolígrafo kilométrico 100  Negro x12",
            "rating": 4,
            "price": "5.718",
            "minimunAmount": 8000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/398-thickbox_default/caja-boligrafo-kilometrico-100-negro-x12.jpg",
            "reviews":[]
        },
        {
            "id":13,
            "status":"no-offer",
            "status_code":4,
            "name": "Caja Bolígrafo kilométrico 100  Rojo x12",
            "rating": 4,
            "price": "5.718",
            "minimunAmount": 1000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/397-thickbox_default/caja-boligrafo-kilometrico-100-rojo-x12.jpg",
            "reviews":[]
        },
        {
            "id":14,
            "status":"no-offer",
            "status_code":4,
            "name": "Cinta Standard Film 12m x 5m x 12 Tesa",
            "rating": 4,
            "price": "2.831",
            "minimunAmount": 8000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/65-thickbox_default/paquete-cinta-tesafilm-standard-transparente-5mx12mm-x12-tesa.jpg",
            "reviews":[]
        },
        {
            "id":15,
            "status":"no-offer",
            "status_code":4,
            "name": "Cinta Enmascarar 12mm x 40m 3m Scotch",
            "rating": 4,
            "price": "2.016",
            "minimunAmount": 2000,
            "currentTotalAmount":0,
            "myAmount": 0,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
            "picture": "https://papelist.com/707-thickbox_default/cinta-enmascarar-12mm-x-40m-3m-scotch.jpg",
            "reviews":[]
        },
    ]
};
let localProd = localStorage.getItem('products');
let prods;
if(!localProd){
  prods = defaultProds;
}else{
  prods = JSON.parse(localProd);
}
export default prods