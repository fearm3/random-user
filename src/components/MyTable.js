import React from "react";
import { Card, Table } from "react-bootstrap";
import { MdAutoDelete } from "react-icons/md";
const MyTable = ({ user, deleteUser }) => {
  // console.log("user", user);

  return (
    <Table className="table-container">
      {user.length > 0 && (
        <Table striped bordered hover size="sm">
          <thead className="thead">
            <tr>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((item, index) => (
              <tr key={index}>
                <td>{`${item[0]?.name?.first} ${item[0]?.name?.last}`}</td>
                <td>{item[0]?.email}</td>
                <td>{item[0]?.phone}</td>
                <td>{item[0]?.dob?.age}</td>
                <td>
                  <MdAutoDelete
                    className="icon me-3"
                    onClick={() => deleteUser(item[0]?.email)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Table>
  );
};
export default MyTable;
