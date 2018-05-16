var addList = document.getElementById('add-comment-input');
var container = document.getElementById('container');

// VERSION 0.0.1
addList.addEventListener('click', function() {
    var containerForm = document.getElementById('containerForm');
    // input ya creado
    var inputContainer = document.getElementById('add-comment-input');

    // input creado en js para que reemplace el primero
    var inputContainerNew = document.createElement('textarea'); //nuevo input para reemplazar al original y poder escribir


    var btnAceptar = document.createElement('button');
    var cancel = document.createElement('i');
    var space = document.createElement('br');
    var btnTextContainer = document.createTextNode("Guardar");

    // created elements
    btnAceptar.appendChild(btnTextContainer);

    containerForm.appendChild(inputContainerNew); //nuevo input para reemplazar al original y poder escribir
    containerForm.appendChild(space);
    containerForm.appendChild(btnAceptar);
    containerForm.appendChild(cancel);
    container.appendChild(containerForm);

    // icons
    cancel.classList.add('fas', 'fa-times', 'times');

    // properties in css
    btnAceptar.classList.add('btnAceptar');
    cancel.classList.add('iconCancel');
    containerForm.classList.add("containerForm");
    inputContainerNew.id = 'add-comment-input';//nuevo input para reemplazar al original y poder escribir

    inputContainer.style.display = "none";
    inputContainerNew.placeholder = " Añadir una lista..."//nuevo input para reemplazar al original y poder escribir


    // containerForm.parentElement.insertBefore(containerForm);
});
