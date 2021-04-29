
// import TableData from "./components/TableData";

import React from 'react';
// import "./style.css";

function TableHtml (props)  {

  let { format, picture, name, email, phone, nat } = props;
  console.log(picture);
  console.log(name);
    return (
        <table className={`table ${format || "table-striped"}`}>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Nationality</th>
          </tr>
        </thead>
        <tbody>
          <img 
            style={{ maxWidth: "60px"}}
            className="rounded-full shadow-md"
            src={picture.map(picture => <tr>{picture.map(item => <td>{item}</td>)}</tr>)}
            alt="employee photo"
            />
          <tr>
            <th scope="row"></th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>{email}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>{nat}</td>
          </tr>
        </tbody>
      </table>
  );
}


//   return (
//         <table className={`table ${format || "table-striped"}`}>
//         <thead>
//           <tr>
//             {headings.map(heading => <th scope="col">{heading}</th>)}
//           </tr>
//         </thead>
//         <tbody>      
//           {rows.map(row => <tr>{row.map(item => <td>{item}</td>)}</tr>)}
//         </tbody>
//       </table>
//   );


export default TableHtml;