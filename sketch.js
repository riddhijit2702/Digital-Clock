        var hr= hour()
        var mn
        var sc 
        

var hr_angle,mn_angle,sc_angle;





        function setup() {
          createCanvas(800,400);
        //  createSprite(400, 200, 50, 50);


         
        }

        function draw() {
          background(0);  
          sc =second()
          mn= minute()
          hr= hour()
         

          angleMode(DEGREES);

  
  hr_angle=map(hr%12,0,12,0,360);
  
  mn_angle=map(mn,0,60,0,360);
  sc_angle=map(sc,0,60,0,360);

  translate(200,200);
  
  rotate(-90);

  push();
  noFill();
  strokeWeight(9);
  stroke("red");
  arc(0, 0, 300, 300,0,sc_angle );
  rotate(sc_angle);
  line(0,0,100,0);
  pop();

  
  push();
  noFill();
  strokeWeight(9);
  stroke(1, 252, 10);
  arc(0,0,280,280,0,mn_angle);
  rotate(mn_angle);
  line(0,0,75,0);
  pop();

  
  push();
  noFill();
  strokeWeight(9);
  stroke(1,2,246);
  arc(0,0,260,260,0,hr_angle);
  rotate(hr_angle);
  line(0,0,75,0);
  pop();


  
          drawSprites();


         text(mouseX+","+mouseY,400,400) 
        }



















