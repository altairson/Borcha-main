$(document).ready(function() {
    var base = $(".base");

    var editor = $('#editor');
    var clas = "0";
    var subClas = 0;
    var oldData = [];
    var newData = [];


    $('.nav_btn').click(function() {
        let id = $(this)[0].id.split('_')[0];
        $('.active').removeClass('active');
        $(this).addClass('active');
        togglePage(id);
    })

    function togglePage(id) { 
        $('.page').removeClass('hidden').addClass('hidden');
        $(`#${id}`).removeClass('hidden');
    }

    // move base div on mouse move
    editor.mousemove(function (e) {
        base[0].style.left = (e.offsetX - 50) + 'px';
        base[0].style.top = (e.offsetY + 30) + 'px';
    })

    // only show base div when mouse is over editor div
    editor.mouseenter(function () {
        base.show();
    })

    // hide base div when mouse leaves editor div
    editor.mouseleave(function () {
        base.hide();
    })

    // hide base div when foccused on other box
    editor.on("mouseenter", ".box", function () {
        base.hide()
    })

    editor.on("mouseleave", ".box", function () {
        base.show()
    })

    editor.mousedown(function (e) {
        if (base[0].style.display != 'none') {
            createBox(e);
        }
    })

    function createBox(e) {
        if ($(".box")[0] == undefined) {
            clas = "0";
            subClas = 0;
            // create box
            let div = document.createElement("DIV")
            if ($(".sec-focus")[0] != undefined) {
                $(".sec-focus").removeClass("sec-focus");
            }
            div.classList.add('sec-focus');
            div.classList.add(clas);
            div.style.left = (e.pageX - 106) + 'px';
            div.style.top = (e.pageY - 90) + 'px';
            div.dataset.id = "-1";

            //create input
            let input = document.createElement("INPUT");
            input.type = "text";
            input.classList.add("name");

            // input.value = clas;
            input.placeholder = clas;

            // appent input in div and div in #main
            div.append(input);
            div.classList.add("focus")
            div.classList.add("box")
            editor.append(div);
            input.focus();
        }
        else {
            let div = document.createElement("DIV")
            

            let clasName = clas + subClas.toString();
            div.classList.add(clasName)

            if ($(".sec-focus")[0] != undefined) {
                $(".sec-focus").removeClass("sec-focus");
            }
            div.classList.add('sec-focus');

            subClas++;
            div.style.left = (e.offsetX - 50) + 'px';
            div.style.top = (e.offsetY - 15) + 'px';
            div.dataset.id = "-1";

            //create input
            let input = document.createElement("INPUT");
            input.type = "text";
            input.classList.add("name");

            // input.value = clasName;
            input.placeholder = clasName;

            // appent input in div and div in #main
            div.append(input);
            div.classList.add("box");
            editor.append(div);
            connectWithLine(div, clasName);
            input.focus();
        }
    }

    function connectWithLine(div, clas) {
        parent = $(".focus")[0];
        child = div;

        let x1 = parseInt(parent.style.left.split("px")[0]) + 45;
        let y1 = parseInt(parent.style.top.split("px")[0]) + 12;
        let x2 = parseInt(child.style.left.split("px")[0]) + 45;
        let y2 = parseInt(child.style.top.split("px")[0]) + 12;
        editor.append(`<svg class="${clas} line"><line x1="${x1}" y1="${y1}" x2=${x2} y2="${y2}" stroke="black"/></svg>`);
    }
});