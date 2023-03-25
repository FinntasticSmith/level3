import React from "react"
import style from "./style.css"

export default function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phone: "",
        food: "",
        aboutYou: ""
    })
}
console.log(formData.aboutYou)

function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData, 
            [event.target.name]:event.target.value
        }
    })
}

return (
    <form>
        
    </form>
)