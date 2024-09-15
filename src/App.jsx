import React from "react"
 import { useState } from "react"
 import Game from'./components/Game'


 
function App(){
    const [games,setGames] =useState([
        
        {id:1,name:"Valleyball",players:"10m",color:"red",twcolor:"bg-yellow-300"},
        {id:2,name:"Basketball",players:"20m",color:"blue",twcolor:"bg-pink-400"},
        {id:3,name:"Football",players:"2m",color:"green",twcolor:"bg-orange-300"},

    ])
    return (
        <div>
        <h1 className='text-3xl  '>  This in index page</h1>
    
        <h1 className="text-5xl font-bold text-center">Popular Games</h1>
    
        {games.map(
        (game) =>{
            return(
                <Game key={game.id} game={game}/>   
            
            )
        }
    )}

    </div>
    
    )
}
export default App


    
