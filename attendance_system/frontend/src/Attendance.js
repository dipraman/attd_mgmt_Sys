import React from 'react'

const data = [
    { subject_name: "PPS", subject_code: 17, gender: "Male",hours_conducted: 45,hours_attended: 30},
    { subject_name: "OS", subject_code: 21, gender: "Female",hours_conducted: 45,hours_attended: 35},
    { subject_name: "DBMS", subject_code: 96, gender: "Male",hours_conducted: 45,hours_attended: 38},
    { subject_name: "CN", subject_code: 25, gender: "Male",hours_conducted: 45,hours_attended: 45},
    { subject_name: "CIVIL", subject_code: 71, gender: "Male",hours_conducted: 45,hours_attended: 40},
  ]

 
  

const Contact = () => {
  return (
    <div> 
      <h1>Attendance Details</h1>

      {/* if(uname==="student1")
      { */}
        <table>
        <tr>
          <th>Subject</th>
          <th>Hours Conducted</th>
          <th>Hours Attended</th>
          <th>Hours Missed</th>
          <th>Percentage</th>
          <th>Deafulter</th>

        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.subject_name}</td>
              <td>{val.hours_conducted}</td>
              <td>{val.hours_attended}</td>
              <td>{val.hours_conducted-val.hours_attended}</td>
              <td>{((val.hours_attended/val.hours_conducted)*100).toFixed(0)}</td>
              
              <td>{"YES"}</td>

            </tr>
          )
        })}
      </table>
      
    </div>
  )
}

export default Contact