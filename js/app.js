var addList = document.getElementById('add-comment-input');
var container = document.getElementById('container');

// VERSION 0.0.1
addList.addEventListener('click', function() {
    // created elements
    var containerForm = document.createElement('div');
    // input ya creado
    var inputContainer = document.getElementById('add-comment-input');

    // input creado en js para que reemplace el primero
    var inputContainerNew = document.createElement('textarea'); //nuevo input para reemplazar al original y poder escribir
    var btnAceptar = document.createElement('button');
    var cancel = document.createElement('i');
    var space = document.createElement('br');
    var btnTextContainer = document.createTextNode("Guardar");

    // anidado
    btnAceptar.appendChild(btnTextContainer);
    containerForm.appendChild(inputContainerNew); //nuevo input para reemplazar al original y poder escribir
    containerForm.appendChild(space);
    containerForm.appendChild(btnAceptar);
    containerForm.appendChild(cancel);
    container.appendChild(containerForm);

    // focus
    inputContainerNew.focus();

    // icons
    cancel.classList.add('fas', 'fa-times', 'times');

    // properties in css
    btnAceptar.classList.add('btnAceptar');
    cancel.classList.add('iconCancel');
    containerForm.classList.add("containerForm");
    inputContainerNew.id = 'add-comment-input-new'; //nuevo input para reemplazar al original y poder escribir

    inputContainer.style.display = "none";
    inputContainerNew.placeholder = " Añadir una lista..." //nuevo input para reemplazar al original y poder escribir

    // boton cancelar
    cancel.addEventListener('click', function() {
        inputContainer.style.display = "inline-block";
        container.removeChild(containerForm);

        //     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    })

    // VERSIÓN 0.0.2
    // boton Guardar
    btnAceptar.addEventListener('click', function() {

        // creando elementos
        var containerList = document.createElement('div');
        var titleList = document.createElement('div');
        var titleComment = document.createElement('p');
        var addNameListComment = document.getElementById('add-comment-input-new').value;
        var textNewComment = document.createTextNode(addNameListComment); //Convirtiendo a texto el string ingrasado de addNameListComment
        var containerAddTarjet = document.createElement('div');
        var paragraphAddTarjet = document.createElement('p');
        var textAddTarjet = document.createTextNode("Añadir una tarjeta... ");

        // anidado
        containerList.appendChild(titleList);
        titleList.appendChild(titleComment);
        titleComment.appendChild(textNewComment);
        containerList.appendChild(space);
        containerList.appendChild(containerAddTarjet);
        containerAddTarjet.appendChild(paragraphAddTarjet);
        paragraphAddTarjet.appendChild(textAddTarjet);

        // VERSI0N 0.0.6 (EXTRA)
        container.appendChild(containerList);
        container.appendChild(containerForm);

        // limpiar el textarea
        document.getElementById('add-comment-input-new').value = '';

        // estilos en CSS
        containerList.classList.add('containerForm');
        containerForm.classList.add('containerForm');
        titleComment.classList.add('titleComment');
        paragraphAddTarjet.id = 'addTarjetN';

        // VERSIÓN 0.0.4
        paragraphAddTarjet.addEventListener('click', function() {
            // creando elementos
            // VERSIÓN 0.0.5
            var addNewCard = document.createElement('textarea');
            var btnAdd = document.createElement("button");
            var btnText = document.createTextNode("Añadir");
            var cancelAdd = document.createElement('i');
            var containerparagraphTextValueAddCardNew = document.createElement('div');

            // anidar
            containerList.appendChild(containerparagraphTextValueAddCardNew); //se utiliza en la funcion del boton añadir
            containerList.appendChild(addNewCard);
            containerList.appendChild(space);
            containerList.appendChild(btnAdd);
            btnAdd.appendChild(btnText);
            containerList.appendChild(cancelAdd);

            addNewCard.focus();

            // icons
            cancelAdd.classList.add('fas', 'fa-times', 'times');

            // estilos
            btnAdd.classList.add('btnAceptar');
            addNewCard.id = 'add-comment-input-text';
            containerList.id = 'containerFormAuto';
            cancelAdd.classList.add('iconCancel');
            // remover
            containerList.removeChild(containerAddTarjet);

            // boton cancelar
            cancelAdd.addEventListener('click', function() {
                container.removeChild(containerList);
            })

            // boton añadir
            btnAdd.addEventListener('click', function() {
                // creando
                var valueAddCardNew = document.getElementById('add-comment-input-text').value;
                var textValueAddCardNew = document.createTextNode(valueAddCardNew);
                var paragraphTextValueAddCardNew = document.createElement('p');
                var contParagraph = document.createElement('div');

                // limpiar el textarea
                document.getElementById('add-comment-input-text').value = '';

                // anidando
                containerparagraphTextValueAddCardNew.appendChild(contParagraph);
                contParagraph.appendChild(paragraphTextValueAddCardNew);
                paragraphTextValueAddCardNew.appendChild(textValueAddCardNew);

                // focus
                addNewCard.focus();
                // estilos
                contParagraph.classList.add("containerparagraphTextValueAddCardNew");
            })

        })
    })
});
