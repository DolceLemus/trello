var addList = document.getElementById('add-comment-input');
var container = document.getElementById('container');

// VERSION 0.0.1
addList.addEventListener('click', function() {
    var containerForm = document.getElementById('containerForm');

    var inputContainer = document.getElementById('add-comment-input');
    var btnAceptar = document.createElement('button');
    var cancel = document.createElement('i');
    var space = document.createElement('br');
    var btnTextContainer = document.createTextNode("Guardar");

    // created elements
    btnAceptar.appendChild(btnTextContainer);

    containerForm.appendChild(inputContainer);
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


    // containerForm.parentElement.insertBefore(containerForm);
});
