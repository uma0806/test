import axios from "axios";
import { useEffect, useState } from "react";
 
function EmployeeCrud() {
  const [_id, setId] = useState("");
  const [firstnamename, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [hobbies, sethobbies] = useState("");
  const [gender, setgender] = useState([]);
 
  useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    const result = await axios.get("http://localhost:8000/user/getAll");
    setUsers(result.data.data);
    console.log(result.data);
  }
 
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/create", {
        firstname: name,
        lastname: lastname,
        hobbies: hobbies,
        gender: gender,
      });
      alert("Employee Registation Successfully");
      setId("");
      setfirstname("");
      setlastname("");
      sethobbies("");
      
      setgender("");
      Load();
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  async function editEmployee(employees) {
    setName(employees.name);
    setAddress(employees.address);
    setMobile(employees.phone);
 
    setId(employees._id);
  }
 
  async function DeleteEmployee(_id) {
    await axios.delete("http://localhost:8000/user/delete/" + _id);
    alert("Employee deleted Successfully");
    Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "http://localhost:8000/user/update/" +
          employees.find((u) => u._id === _id)._id || _id,
        {
          _id: _id,
          firstname: firstname,
          lastname: lastname,
          hobbies: hobbies,
          gender: gender,
        }
      );
      alert("Registation Updateddddd");
      setfirstName("");
      setlastName("");
      sethobbies("");
      setgender("");
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  return (
    <div>
      <h1>Employee Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>Employee firstNameName</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Employee lastname</label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={lastname}
              onChange={(event) => {
                setlastname(event.target.value);
              }}
            />
          </div>
 
          <div class="form-group">
            <label>hobbies</label>
            <input
              type="text"
              class="form-control"
              id="hobbies"
              value={hobbies}
              onChange={(event) => {
                setMobile(event.target.value);
              }}
            />
          </div>
 
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
 
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee firstName</th>
            <th scope="col">Employee lastname</th>
            <th scope="col">Employee hobbies</th>
 
            <th scope="col">Option</th>
          </tr>
        </thead>
        {employees.map(function fn(employee) {
          return (
            <tbody>
              <tr>
                <th scope="row">{employee._id} </th>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.hobbies}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editEmployee(employee)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteEmployee(employee._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
 
export default EmployeeCrud;