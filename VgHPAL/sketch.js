var y;
var flag;
var framecounter;
var menucounter;
var bgd;
var buttoncolor;
var buttonheight;
var startFlag;

function setup() {
    createCanvas(windowWidth,windowHeight);
    y = 0;
    bgd = 0;
    buttoncolor = 255;
    flag = true;
    menucounter = 0;
    framecounter = 0;
    startFlag = false;
    buttonheight = height/2;
}

function draw() {
    if(key==' ' && !startFlag){
        menucounter = 1;
    }
    if(key=='r'){
        y = 0;
        bgd = 0;
        buttoncolor = 255;
        flag = true;
        menucounter = 0;
        framecounter = 0;
        buttonheight = height/2;
        stroke(0);
        startFlag = false;
    }
    
    //Opening 'Welcome'
    if(menucounter == 0){
        displayWelcome();
        pulse(5);
    }
    if (menucounter == 1) {
        displayWelcome();
        if(y>0) {
            y = y - 5;
        }
        if(y<=0) {
            menucounter = 2;
            y = 0;
        }
    }
    if (menucounter == 2){
        background(bgd);
        bgd += 5;
        if(bgd>=250)
            menucounter = 3;
    } 
    if (menucounter == 3){
        displayMenu();
        if(mouseX>width/3 && mouseX<2*width/3 && mouseY>buttonheight && mouseY<buttonheight+40){
            buttoncolor = 175;
            if(mouseIsPressed){
               startFlag = true;
            }
        }
        else{
            buttoncolor = 255;
        }
    }
    if (menucounter == 4){
        runGame();
    }
    if(startFlag){
        menucounter = 4; 
    }
}

function runGame(){
    background(145);
    
    if(height<width){
        fill(0);//black
        rect(height/5,2*height/5,3*height/5, .03*height);
        fill(255, 0, 0);//red
        rect(height/5,3*height/5,3*height/5, .03*height);
        fill(0,255,0);//green
        rect(2*height/5-.5*.03*height, height/5+.5*.03*height, .03*height, 3*height/5);
        fill(0,0,255);//blue
        rect(3*height/5-.5*.03*height, height/5+.5*.03*height, .03*height, 3*height/5);
    }
    else {
        fill(0);//black
        rect(width/5,2*width/5,3*width/5, .03*width);
        fill(255, 0, 0);//red
        rect(width/5,3*width/5,3*width/5, .03*width);
        fill(0,255,0);//green
        rect(2*width/5-.5*.03*width, width/5+.5*.03*width, .03*width, 3*width/5);
        fill(0,0,255);//blue
        rect(3*width/5-.5*.03*width, width/5+.5*.03*width, .03*width, 3*width/5);
    }
}

function displayWelcome(){
    background(0);
    fontSize = 40;
    fill(y, y, y);
    textSize(fontSize);
    textFont("Futura");
    textAlign(CENTER);
    text("Welcome", width/2, height/2);
    
    fill(y/2, y/2, y/2);
    fontSize = 15;
    textSize(fontSize);
    textFont("Futura No. 2");
    text("Press space to continue...", width/2, height/2+60);
}

function displayMenu(){
    
    background(bgd);
    fill(255, 0, 0);
    fontSize = 50;
    textSize(fontSize);
    textFont("Futura");
    text("Tic Tac Toe", width/2, height/3);
    
    stroke(255);
    fill(buttoncolor, 0, 0);
    rect(width/3, buttonheight, width/3, 40);
    
    fill(255);
    fontSize = 30;
    textSize(fontSize);
    textFont("Futura No. 2");
    text("Play", width/2, buttonheight+30 );
}

function pulse(speed){
    if(y == 245 && framecounter < 90){
        framecounter++;
    }
    else{
        if (flag){
            y = y+speed;
        }else{
            y = y-speed;
        }
        if (y>245) {
            flag = !flag;
        }
        if (y<5){
            flag = !flag;
            framecounter=0;
        }
    }
}