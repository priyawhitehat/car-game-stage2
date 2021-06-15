class Form
{
    constructor()
    {
       this.title=createElement("h1");
       this.input=createInput();
       this.button=createButton("Play");
       this.greeting=createElement("h2")
    }

    display()
    {
        this.title.position(350,10);
        this.title.html("CAR GAME");
        this.input.position(400,200);
        this.button.position(450,300);
        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            this.greeting.position(400,300);
            this.greeting.html("Welcome "+this.input.value());
            count=count+1;
            player.updatecount();
            player.index=count;
            player.name=this.input.value();
            player.update();
        });
        
        
    }

   

   

}