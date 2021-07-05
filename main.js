var canvas = new fabric.Canvas('McDonalds');

var pr_y = 40;
var pr_x = 40;
var obj_pr = "";
var bk_img = "";

function Player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        obj_pr = img;
        obj_pr.scaleToWidth(155);
        obj_pr.scaleToHeight(200);
        obj_pr.set({
            top: Player_y,
            left: PlAyEr_x
        });
        canvas.add(obj_pr);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (img) {
        bk_img = img;

        bk_img.scaleToWidth(blox_width);
        bk_img.scaleToHeight(blox_height);
        bk_img.set({
            top: Player_y,
            left: PlAyEr_x
        });
        canvas.add(bk_img);
    });
}

function my_keydown() {
    if (keyPressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    if (keyPressed == '66') {
        new_image('spiderman_body.png');
        console.log("b");
    }
    if (keyPressed == '76') {
        new_image('hulk_legs.png');
        console.log("l");
    }
    if (keyPressed == '82') {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if (keyPressed == '72') {
        new_image('captain_america_left_hand.png');
        console.log("f");
    }
    if (keyPressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    if (keyPressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    if (keyPressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }

}