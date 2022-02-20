import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";
//import World from "./component/World";

function App() {
  return(
    <div className="App">
    <Hello />
    {/* //<div className="box"/> */}
    <div className={styles.box}>Funny App</div>
  
    <Welcome />
    </div>
  );
}

export default App;



// import "./App.css";
// import Hello from "./component/Hello";
// //Do not forget import compont file.
// import Welcome from "./component/Welcome";

// function App() {
//   return (
//     <div className="App">
//       {/* //Write down the imported Hello Component.
//        //If there are no letters or numbers to enter, 
//        //it will self-close. <Hello /> */}
//       <Hello/>
//       <Welcome/>
//       <Hello/>
//       <Hello/>
//     </div>
//   );
// }

// export default App;








// // import "./App.css";

// // function App() {
// //   const name = "Rafunsel";
// //   const yahoo = {
//     name: "yahoo",
//     url: "https://yahoo.com",
//   }
//   return (
//     <div className="App">
//     <h1
//       style={{
//         color:"pink",
//       }}
//     >
//     Welcome, {name}!
//     <p>{10-5}</p>
//     <a href= {yahoo.url}>{yahoo.name}</a>
//     </h1>
//     </div>
//   )
// }

// export default App;




// import "./App.css";

// function App () {
//   //make variable for rerurn texts ex)name
//   const name= "Language Exchange Cafe ";
//   const google = {
//     name: " google",
//     url: "https://google.com",

//   };
//   return(
//     <div className ="App">
//       <h1 
//       //Make object with js like using {{}}
//         style= {{
//           //color name with string "",
//           color: "#f0f", 
//           //use camelcase for backgroundColor
//           backgroundColor:"green",
//         }}
//         >
//           {/* //Variables are used inside curly 
//           braces. or {2+5}Numbers and letters are well represented, but bolean types and objects are 
//           not well represented.*/}
//         Hello, {name} !
        
//         <p>{2+5}</p>
//         </h1>
//         <a href ={google.url}>{google.name}</a>
//     </div>

//   )
  
// }

// export default App;