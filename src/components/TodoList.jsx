import { ListGroup } from "react-bootstrap";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2 className="text-center text-secondary">Todos</h2>

      <ListGroup className="w-50 d-flex mx-auto">
        {todos.map((todo) => (
          <ListGroup.Item variant="success" className="m-2">
            {todo.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
