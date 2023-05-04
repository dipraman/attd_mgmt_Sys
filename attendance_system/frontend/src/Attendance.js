import React from "react";

const studentAttendanceData = {
  student1: [
    {
      subject_name: "SUBJECT1",
      subject_code: 17,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 30,
    },
    {
      subject_name: "SUBJECT2",
      subject_code: 21,
      gender: "Female",
      hours_conducted: 45,
      hours_attended: 35,
    },
    {
      subject_name: "SUBJECT3",
      subject_code: 96,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 38,
    },
    {
      subject_name: "SUBJECT4",
      subject_code: 25,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 45,
    },
    {
      subject_name: "SUBJECT5",
      subject_code: 71,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 40,
    },
  ],
  student2: [
    {
      subject_name: "SUBJECT1",
      subject_code: 17,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 35,
    },
    {
      subject_name: "SUBJECT2",
      subject_code: 21,
      gender: "Female",
      hours_conducted: 45,
      hours_attended: 30,
    },
    {
      subject_name: "SUBJECT3",
      subject_code: 96,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 42,
    },
    {
      subject_name: "SUBJECT4",
      subject_code: 25,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 40,
    },
    {
      subject_name: "SUBJECT5",
      subject_code: 71,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 37,
    },
  ],
  student3: [
    {
      subject_name: "SUBJECT1",
      subject_code: 17,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 35,
    },
    {
      subject_name: "SUBJECT2",
      subject_code: 21,
      gender: "Female",
      hours_conducted: 45,
      hours_attended: 30,
    },
    {
      subject_name: "SUBJECT3",
      subject_code: 96,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 42,
    },
    {
      subject_name: "SUBJECT4",
      subject_code: 25,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 42,
    },
    {
      subject_name: "SUBJECT5",
      subject_code: 71,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 38,
    },
  ],student4: [
    {
      subject_name: "SUBJECT1",
      subject_code: 17,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 39,
    },
    {
      subject_name: "SUBJECT2",
      subject_code: 21,
      gender: "Female",
      hours_conducted: 46,
      hours_attended: 35,
    },
    {
      subject_name: "SUBJECT3",
      subject_code: 96,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 40,
    },
    {
      subject_name: "SUBJECT4",
      subject_code: 25,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 39,
    },
    {
      subject_name: "SUBJECT5",
      subject_code: 71,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 39,
    },
  ],
  student5: [
    {
      subject_name: "SUBJECT1",
      subject_code: 17,
      gender: "Male",
      hours_conducted: 49,
      hours_attended: 35,
    },
    {
      subject_name: "SUBJECT2",
      subject_code: 21,
      gender: "Female",
      hours_conducted: 42,
      hours_attended: 30,
    },
    {
      subject_name: "SUBJECT3",
      subject_code: 96,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 42,
    },
    {
      subject_name: "SUBJECT4",
      subject_code: 25,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 37,
    },
    {
      subject_name: "SUBJECT5",
      subject_code: 71,
      gender: "Male",
      hours_conducted: 45,
      hours_attended: 39,
    },
  ],
  // add more students as needed
};
let x=1;
const Contact = (props) => {
  const { username } = props.location.state; // get the username from the location state
  const attendanceData = studentAttendanceData[username];
  return (
    <div>
      <h1>MIT-ADT "SAM System"</h1>
      <h2>Attendance Details for {username}</h2>

      <table>
        <tr>
          <th>Subject</th>
          <th>Hours Conducted</th>
          <th>Hours Attended</th>
          <th>Hours Missed</th>
          <th>Percentage</th>
          <th>Deafulter</th>
        </tr>
        {attendanceData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.subject_name}</td>
              <td>{val.hours_conducted}</td>
              <td>{val.hours_attended}</td>
              <td>{val.hours_conducted - val.hours_attended}</td>
              <td>
                {((val.hours_attended / val.hours_conducted) * 100).toFixed(0)}
              </td>
              <td>
                {((val.hours_attended / val.hours_conducted) * 100).toFixed(0) <
                75
                  ? "YES" 
                  : "NO"}
                 
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Contact;
