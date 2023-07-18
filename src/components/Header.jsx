import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
  return (
    <div>
   <h1 className="text-center text-danger m-5">Todo App</h1>
   <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter new Todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className="input-group-text bg-success" id="basic-addon2">Add Todo</Button>
      </InputGroup>
    </div>
  )
}

export default Header
