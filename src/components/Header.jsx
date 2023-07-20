import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Header = ({ todos, setTodos }) => {
  const [task, setTast] = useState("");
  const handleClick = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: task,
      completed: false,
    };
    console.log(newTodo);
    setTodos(...todos,newTodo)
    setTast("");
  };
  return (
    <div>
      <h1 className="text-center text-danger m-5">Todo App</h1>
      <InputGroup className="mb-3 w-75 d-flex mx-auto">
        <Form.Control
          className="rounded-3"
          placeholder="Enter new Todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e) => setTast(e.target.value)}
        />
        <Button
          className="input-group-text bg-success rounded-2 mx-2"
          onClick={handleClick}
          disabled={!task.trim()}
          id="basic-addon2"
        >
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
