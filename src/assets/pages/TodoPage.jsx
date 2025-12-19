import { useState } from "react";

export default function()
{
    const [inputValue , setInputValue] = useState("");
    function handleInput(event) {
        const value = event.target.value;
        setInputValue(value);
    }
    return(
        <>
            <main>
                <h1>To Do Application</h1>
                <section>
                    <input value = {inputValue} onChange={handleInput} type="text"/>
                    <button className="bg-red-500">add</button>
                </section>

                <section>
                    <ol>
                        <li>the input : {inputValue}</li>
                    </ol>
                </section>
            </main>
        </>
    );
}