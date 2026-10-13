const TERRA = "0xB96E54";
const VERDE = "0x72A11D";
const ROSSO = "0xE44A4A";
const GIALLO = "0xFFD95A";

const A_TERRENO = 96;
const Y_TERRENO = 624;
const X_GINO = 200;
const L_GINO = 81;
const A_GINO = 84;
const L_FUNGO = 90;
const A_FUNGO = 63;
const VEL_FUNGO = 400;
const DISTANZA_MAX = 600;
const VEL_INIZIALE = 400;
const ACCELERAZIONE = 20;

const VEL_SALTO = 1000;
const TASTO_SALTO = PP.key_codes.SPACE;

let gino;
let fungo;
let terreno;
let vel_fungo = VEL_INIZIALE;

function preload(s) {
    terreno = PP.shapes.rectangle_add(s,
        LARGHEZZA / 2, Y_TERRENO + A_TERRENO / 2,
        LARGHEZZA, A_TERRENO, TERRA, 1);
}
function create(s) {
    PP.shapes.arc_add(s, 1080, 130, 56, 0, 360, false, GIALLO, 1);
     crea_terreno(s);
     crea_gino(s);
     crea_fungo(s);
}
    function crea_terreno(s) {
        terreno = PP.shapes.rectangle_add(s,
            LARGHEZZA / 2, Y_TERRENO + A_TERRENO / 2,
            LARGHEZZA, A_TERRENO, TERRA, 1);
        PP.physics.add(s, terreno, PP.physics.type.STATIC);
}
    function crea_gino(s) {
        gino = PP.shapes.rectangle_add(s,
            X_GINO, Y_TERRENO - A_GINO / 2,
            L_GINO, A_GINO, VERDE, 1);
        PP.physics.add(s, gino, PP.physics.type.DYNAMIC);
        PP.physics.set_collide_world_bounds(gino, true);
        PP.physics.add_collider(s, gino, terreno);
}
    function crea_fungo(s) {
        fungo = PP.shapes.rectangle_add(s,
            LARGHEZZA * 3 / 4, Y_TERRENO - A_FUNGO / 2,
            L_FUNGO, A_FUNGO, ROSSO, 1);
        PP.physics.add(s, fungo, PP.physics.type.DYNAMIC);
        PP.physics.set_collide_world_bounds(fungo, true);
        PP.physics.add(s, fungo, PP.physics.type.DYNAMIC);
        PP.physics.set_allow_gravity(fungo, false);
        PP.physics.set_velocity_x(fungo, -VEL_FUNGO);
}

function update (s) {
    salta(s);
    controlla_fungo();
}
    function salta(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_SALTO)) {
    PP.physics.set_velocity_y(gino, -VEL_SALTO);
    }
    function controlla_fungo() {
        if (fungo.geometry.body_x < -L_FUNGO) {
            vel_fungo += ACCELERAZIONE;
            resetta_fungo();
    }
}
    function resetta_fungo() {
    fungo.geometry.x = LARGHEZZA + L_FUNGO / 2 +
        Math.random() * DISTANZA_MAX;
        PP.physics.set_velocity_x(fungo, -vel_fungo);
    }
}

function render (s) {}

PP.scenes.add("gino", preload, create, update, render);
