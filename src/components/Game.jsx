function Game(props){
    let players_text= `#${props.game.players}players` 
    return(
        <div className={`${props.game.twcolor} rounded-xl text-white m-4 p-4`}>
        <h2 className="text-2xl font-bold">{props.game.name}</h2>
        <p className="text-lg">this{props.game.players} players</p>
        </div>
             
    )       
            
        }
        export default Game;