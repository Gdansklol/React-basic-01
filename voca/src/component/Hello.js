//  Import World component here! 

import World from "./World";

export default function Hello (){
    
    //p tag have to return to does work!
    return (
        <div>
    <h1>Hello</h1>
    {/* //wrap with return(), div tag ,without div comes err 
    becaus JSx can only one tag ,or with empty tag  <> </>, 
    */}
        <World />
        <World />
        </div>
    );
}







// const Hello = function () {
//     <p>Hello</p>
    
// };

// export default Hello;


// const Hello = function () => {
//     <p>Hello</p>
// };

// export default Hello;