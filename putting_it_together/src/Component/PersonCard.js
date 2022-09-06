import React, {useState} from 'react'


const PersonCard = (props) => {

const [ currentAge, birthday] = useState(props.age);

    return (
        <div className = "thingy" >
            <h1> { props.lastName} , {props.firstName }</h1>
            <p>Age: {currentAge} </p>
            <p>Hair Color: {props.hairColor} </p>
            <button onClick ={ (event) => birthday(currentAge + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;