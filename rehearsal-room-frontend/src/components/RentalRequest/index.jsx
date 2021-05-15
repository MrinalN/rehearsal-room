import React from "react";
import { useState } from "react";
import axios from 'axios';


import RequestForm from "./RequestForm";
import RentalSpace from "./RentalSpace";

//user(renter) info to match email form input


//CREATE TABLE bookings(
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
//   space_id INTEGER NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
//   start_time TIMESTAMP NOT NULL,
//   end_time TIMESTAMP NOT NULL,
//   status VARCHAR(255) DEFAULT 'pending', --pending,confirmed,rejected
//   usage_description TEXT,
//   used_before BOOLEAN
// );


//needs to match space.id

//where do you come from, where do you go? (onSubmit) axioooos??

export default function RentalRequest(props) {
  const [formState, setFormState] = useState({
    user_id: props.user_id, 
    space_id: props.space_id,
    usage_description: "",
    date: "2021-05-20",
    start_time: "10:30",
    end_time: "21:30",
    used_before: false,
    multi_day_rental: false,
    alternative_payment: false
  })

  const handleChange = event => {
    console.log(event.target.name)

    let newValue
    switch (event.target.type) {
      case "checkbox":
        newValue = event.target.checked;
        break;
      default:
        newValue = event.target.value;
        break;
    }

    setFormState( prev => ( {
      ...prev,
      [event.target.name]:newValue
    }))
    }


  return (
    <>
      <div className="rental-request-container">
        <RentalSpace 
        space={props.space}
        />
        <RequestForm 
          formState={formState}
          handleChange={handleChange}
          setVisualMode={props.setVisualMode}
          setPopUp={props.setPopUp}
        />
      </div>
    </>
  )
}
