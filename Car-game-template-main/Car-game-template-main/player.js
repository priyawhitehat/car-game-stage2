class Player
{
    constructor()
    {
       this.index=0;
       this.name='';
       this.distance=0; 
    }
    
    getcount()
    {
       var databaseref=database.ref('playerCount') ;
       databaseref.on("value",function(data){count=data.val()});
    }
    
    updatecount()
    {
        database.ref('/').update({playerCount:count});

    }
    
    getPlayerInfo()
    {

    }

    update()
    {
       playerIndex='player'+this.index;
       database.ref(playerIndex).set({name:this.name,distance:this.distance});

    }

}