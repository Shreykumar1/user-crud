import React from "react";
import { Link } from "react-router-dom";
import { User } from "../types/User";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
    <table className="table text-black text-lg ">
      {/* head */}
      <thead>
        <tr className="text-xl text-blue-800">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user.id} className={` ${index % 2 === 1 ? 'bg-gray-700 text-white' : 'bg-white'}`}>
              <td>
                {user.name}
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {user.phone}
              </td>
              <td >
                <button
                  onClick={() => {onEdit(user)}}
                  className="btn btn-sm bg-blue-500 text-white border-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="btn btn-sm bg-red-500 text-white border-none mx-2"
                >
                  Delete
                </button>
                <Link
                  to={`/user/${user.id}`}
                  className="btn-sm  btn text-white bg-green-500 border-none"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

