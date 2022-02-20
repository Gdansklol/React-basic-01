import "./App.css";

function App () {
  //make variable for rerurn texts ex)name
  const name= "Language Exchange Cafe ";
  const google = {
    name: " google",
    url: "https://google.com",

  };
  return(
    <div className ="App">
      <h1 
      //Make object with js like using {{}}
        style= {{
          //color name with string "",
          color: "#f0f", 
          //use camelcase for backgroundColor
          backgroundColor:"green",
        }}
        >
          {/* //Variables are used inside curly 
          braces. or {2+5}Numbers and letters are well represented, but bolean types and objects are 
          not well represented.*/}
        Hello, {name} !
        
        <p>{2+5}</p>
        </h1>
        <a href ={google.url}>{google.name}</a>
    </div>

  )
  
}

export default App;