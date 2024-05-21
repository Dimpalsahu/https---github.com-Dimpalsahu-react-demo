import React from 'react'

function Person({person}) {
  return (
    <div>
      <h4> i am person {person.firstName}.my last name is{person.lastName}. my dob is{person.DOB}.my deparment is {person.department}.my salary is{person.salary}
</h4>
    </div>
  )
}

export default Person
