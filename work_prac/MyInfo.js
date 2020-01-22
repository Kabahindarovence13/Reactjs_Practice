import React from "react"
import ReactDOM from "react-dom"
//using functional components
function MyInfo() {
    return (
        <div>
            <h1>KABAHINDA ROVENCE</h1>
            <P>This is a paragraph about me</P>
            <ul>
                <li>Nairobi-Kenya</li>
                <li>US</li>
                <li>Fort Portal-Uganda</li>
            </ul>
        </div>
    )

//ReactDOM.render(<MyInfo />, document.getElementById("root"))


}
export default MyInfo