// Fetch list of person 
import React from 'react'

function NameList() {
    const Names=['bruce','clark','john']
// const people = [
//     { id:1,firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
//     { id:2,firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
//     { id:3,firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//     { id:4,firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//     {id:5, firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//     { id:6,firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
// ]

// const NameList=people.map( person =>(<Person key ={person.id} person ={person}/>
// ))
const NameList=Names.map((name,index =><h2 key ={index}>{index} {name}</h2>))
return(<div>{NameList}</div>)

 }

export default NameList
