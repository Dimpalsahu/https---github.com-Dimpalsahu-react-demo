// Fetch list of person 
import React from 'react'

function NameList() {
//     const names=['Bruec', 'clark' ,'Diana']
    //    const namelist=names.map(x =><h2>{x}</h2>)
    // return <div>{namelist}</div>               method 3rd


    //   return (
//     <div>
//       {/* <h1>{names[0]}</h1>
//       <h1>{names[1]}</h1>
//       <h1>{names[2]}</h1> */}               method second

//       {
//    names.map(x => <h2>{x}</h2>)             method first
   
//       }
    
//     </div>
//   )



const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

const NameList=people.map(person =>( 
<h4>i am person {person.firstName}.my last name is{person.lastName}. my dob is{person.DOB}.my deparment is {person.department}.my salary is{person.salary}
</h4>
))

return(<div>{NameList}</div>)

 }

export default NameList
