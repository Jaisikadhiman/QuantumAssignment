import React from "react";
const data = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    age: 30,
    gender: "Male",
    address: "123 Main St, New York, NY",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    age: 28,
    gender: "Female",
    address: "456 Oak St, Los Angeles, CA",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    phone: "555-123-4567",
    age: 35,
    gender: "Female",
    address: "789 Pine St, Chicago, IL",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bobwilliams@example.com",
    phone: "111-222-3333",
    age: 40,
    gender: "Male",
    address: "321 Elm St, Houston, TX",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    age: 28,
    gender: "Female",
    address: "456 Oak St, Los Angeles, CA",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    phone: "555-123-4567",
    age: 35,
    gender: "Female",
    address: "789 Pine St, Chicago, IL",
    status: "Active",
  },
];

const List = () => {
  return (
    <>
     <h1>User List</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Address</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.address}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
   
  );
};

export default List;
