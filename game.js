class Game {
    constructor(){

    }
    getgamestate(){
        var gamestateref=database.ref('gameState')
        gamestateref.on("value", function(data){
          gameState=data.val()  
        })
    }
    updategamestate(state){
        var gamestateref=database.ref('/')
        gamestateref.update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player= new Player()
            player.getplayercount()
            form= new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        text("GOOOOOOOOOOOOOOOOOO!!!!", 120,100)
        Player.getallplayersinfo()
        if (all!==undefined){
            var py=130
            for(var plr in all){
                if(plr==="player"+player.index){
                    fill("lightgreen") 
                }
                text(all[plr].name+":"+all[plr].distance,100,py)
                py=py+20
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance=player.distance+50
            player.updateplayerinfo()
        }
    }
}