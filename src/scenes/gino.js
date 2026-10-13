const TERRA = "0xB96E54";
const A_TERRENO = 96;
const Y_TERRENO = 624;
const X_GINO = 200;
const L_GINO = 81;
const A_GINO = 84;
const 


let terreno;

function preload(s) {
    terreno = PP.shapes.rectangle_add(s,
        LARGHEZZA / 2,
        Y_TERRENO + A_TERRENO / 2,
        LARGHEZZA,
        A_TERRENO,
        TERRA,
        1
    );
}
function crea_terreno (s) {}
 terreno = PP.shapes.rectangle_add(s,
        LARGHEZZA / 2,
        Y_TERRENO + A_TERRENO / 2,
        LARGHEZZA,
        A_TERRENO,
        TERRA,
        1
    );
}
function update (s) {}

function render (s) {}

PP.scenes.add("gino", preload, create, update, render);
