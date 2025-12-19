// import { useState } from "react";

// function TodoPage() {
//     const [inputValue , setInputValue] = useState("");
//     const [items , setItems] = useState([]);

//     function handleAdd()
//     {
//         items.push(inputValue);
//         setItems([...items]);
//         setInputValue("");
//     }
//     return(
//         <>
//             <main>
//                     <h1>Todo Page</h1>
//                 <section>
//                     <input type = "text" placeholder="Type ur work" value = {inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//                     <button onClick = {handleAdd}>Add</button>
//                 </section>
//                 <section>
//                     <ol>
//                         {
//                             items.map( (value , index) => 
//                                 <li key = {index}>{value}</li>
//                             )
//                         }
//                     </ol>
//                 </section>
//             </main>
//         </>
//     );
// }
//  export default TodoPage;
import { useState } from "react";

export default function()
{
    const [inputValue , setInputValue] = useState("");
    const [items , setItems] = useState(["apple" , "orange"]);

    function handleAdd() {
        items.push(inputValue);
        setItems([...items]);
        setInputValue("");
    }
    // function handleInput(event)
    // {
    //     const value = event.target.value;
    //     setInputValue(value);
    // }
    return(
        <>
            <main className="font-mono h-screen w-screen flex flex-col justify-center items-center">
                <h1>To Do Application</h1>
                <section>
                    <input 
                        value = {inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        type="text"
                    />
                    {/* <input 
                        value = {inputValue} 
                        onChange={handleInput} 
                        type="text"
                    /> */}
                    <button className="bg-red-500" onClick={handleAdd}>add</button>
                </section>

                <section>
                    <ol className="list-decimal pl-5">
                        {
                            items.map((value,index) => {
                                return <li key = {index}> {value}  </li>
                            })
                        }
                    </ol>
                </section>
            </main>
        </>
    );
}