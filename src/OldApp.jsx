import { useState } from "react"
import { useEffect } from "react"




function Welcome(props)
{
  return<>
 <h1>Hello {props.name},you are {props.gender},Study in {props.college}</h1>
  
</>




}
function Counter(){

  const[count,setCount]=useState(0)
  const[nextVar,setNextVar]=useState(0)
    useEffect(
    ()=>{
      console.log('COUNTER MOUNTED')
      setCount(count+5)
    },[nextVar]
  )
     function abNext(){
      setNextVar(nextVar+1)
     }

       function increase()
      {
         setCount(count+1)
         console.log(count)
    }

      function decrease ()
      {
        setCount(count-1)
        console.log(count)
      }

      return(
      <div>
         <h1>The Count Value :{count}</h1>

         <button onClick={increase}onMouseEnter={
          ()=>{
            console.log("MOUSE ENTERED")
          }
         }>INCREASE</button> 

          <button onClick={decrease}>DECREASE</button> 

          <button onClick={abNext}>CHANGE NEXT COUNT:{nextVar}</button> 

       </div>
      )
  
}

function Myform(){
  //usestate ma name lekheko xoina vane aafoi lekhdha hunxa firstname ma
  const [FirstName,setFirstName]=useState()
  //if u put false in usestate then print else output
  const [premiumUser,setPremiumUser]= useState(true)
  
  // if(premiumUser){

  //   return<h2>You are Premium User, you can enjoy premium features</h2>
  //  }
  //      else{
  //           return<h2>normal user</h2>
  //    }


  return(
<>
{
premiumUser?(<h1>You are Premium User</h1>):(<h2>you are a normal user</h2>) 
}
 <button onClick={()=>{
   setPremiumUser(!premiumUser)
 }}>Toggle user
 </button>



<h2> firstName value is:{FirstName || "not available"} </h2>

  <form >
          <label html="FirstName">FirstName</label>
           <input id="FirstName" type="text" onChange={
            (e)=>{
            console.log("input changed",e.target.value)
            setFirstName(e.target.value)
           }
           }/>
    </form>
  </>
  )
}

function Games(){
  const [games,setgames]=useState(["Valleyballl ", "Footballl ", "Cricket "])
return (
  <div>
       <h1>This displays Games</h1>
       <ul>
      {/*<li>Valleyball</li>*/}
      {games.map((game,index)=>{
        return<li key={index}>{game}</li>
      })}
       </ul>
       {games.map((game,index)=>{
        return<Game key={index}title={game}/>
       })}
  </div>
)
}

function Game(props){
  return(
    <div style={{
      padding:"10px",
      color:"blue",
      backgroundColor:"cyan",
      borderRadius:"10px",
      margin:"10px"
    }}>
      <h1 className="game-title">{props.title}</h1>
      <hr />
    </div>
  )
}

function App() 
{
let name1="Menuka"
let name2="Manalisha"
let gender1="female"
let college1="Shreeyantra"
  
  return (
  <div>
         <h1> welcome to NEPAL</h1>
           <p>we are nepali</p>
  <div>

          <Welcome name={name1} gender={gender1} college={college1}/>

            <Welcome name={name2} gender={gender1} college={college1}/>

            <Counter/>
            <Myform/>
            <Games/>

  </div>
  </div>
 
  )
    
}

export default App
