$(document).ready(function () {

    'use strict';

    for (let i = 0; i < hamburguesas.length; i++) {

        $('#hamburguesas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto productos rounded">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ hamburguesas[i]['Imagen'] +'" alt="'+ hamburguesas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ hamburguesas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:110px">'+ hamburguesas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ hamburguesas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ hamburguesas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ hamburguesas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-carrito">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < pizzas.length; i++) {

        $('#pizzas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto productos rounded">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ pizzas[i]['Imagen'] +'" alt="'+ pizzas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ pizzas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:110px">'+ pizzas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ pizzas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ pizzas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ pizzas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-carrito">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < vaos.length; i++) {

        $('#vaos').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto productos rounded">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ vaos[i]['Imagen'] +'" alt="'+ vaos[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ vaos[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:110px">'+ vaos[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ vaos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ vaos[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ vaos[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-carrito">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < fritos.length; i++) {

        $('#fritos').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto productos rounded">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ fritos[i]['Imagen'] +'" alt="'+ fritos[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ fritos[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:110px">'+ fritos[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ fritos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ fritos[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ fritos[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-carrito">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < pasteleria.length; i++) {

        $('#pasteleria').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto productos rounded">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ pasteleria[i]['Imagen'] +'" alt="'+ pasteleria[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ pasteleria[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:110px">'+ pasteleria[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ pasteleria[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ pasteleria[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ pasteleria[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-carrito">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < bebidas.length; i++) {

        $('#bebidas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto productos rounded">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ bebidas[i]['Imagen'] +'" alt="'+ bebidas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ bebidas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:110px">'+ bebidas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ bebidas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ bebidas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ bebidas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-carrito">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    $('#carrito').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            //'<img class="img-fluid" src="{product_image}" />' +
            '<p class="h5 list-group-item-heading">{product_name}</p>' +
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Sin productos aún!<br>Comenzá a elegir'
        }
    });
});