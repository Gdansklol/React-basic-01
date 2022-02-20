//#6 React JS (Handling Events)
//First metod: Make a function with functions name
// in advance and check if it appears 
//in the console


//Secon metod: Make a function ex) in return() and write
// efter {{}} function name/button name
//Advantages>Easy to pass parameters ex) function showAge(age){}

//Make input with onChange function :Whenever the text changes, 
//the text should be printed out.
//e or event, e.targen.value

export default function Hello() {
    function showName () {
        console.log("Rafunzel Lågström")
    }
    function showAge(age) {
        console.log(age);
    }
    // function showText(e){
    //     console.log(e.target.value);
    // }

    function showText(txt){
        console.log(txt);
    }
    return(
        <div>
        <h1>Hello</h1>
        <button onClick={showName}>Show name</button>
        <button
        onClick={() => {
        showAge(22)
        }}
    >
            Show age
        </button>
        {/* <input type="text" onChange={showText} /> */}
        <input
        type="text"
        onChange={e =>{
            const txt = e.target.value;
            showText(txt);
            // console.log(e.target.value);
        }}
        />
        </div>
    );
}





// import World from "./World";
// import styles from "./Hello.module.css";



// export default function Hello (){
//     return (
//         <div>
//         <h1
//         style={{
//             color: "green",
//             borderRight: "12px solid #000",
//             marginBottom: "50px",
//             opacity:1,

//         }}
//         >
//         God night! (God natt! / Sov Gott !)
//         </h1>
//         <div className={styles.box}>Hello</div>
        
//         <World />
        
    
//         </div>
//     );
// }


// // //  Import World component here! 
// // import World from "./World";

// // export default function Hello (){
    
// //     //p tag have to return to does work!
// //     return (
//         <div>
//     <h1>Hello</h1>
//     {/* //wrap with return(), div tag ,without div comes err 
//     becaus JSx can only one tag ,or with empty tag  <> </>, 
//     */}
//         <World />
//         <World />
//         </div>
//     );
// }







// const Hello = function () {
//     <p>Hello</p>
    
// };

// export default Hello;


// const Hello = function () => {
//     <p>Hello</p>
// };

// export default Hello;