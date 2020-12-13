import React, { useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "./contexts/todo.context";

export default function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <List>
              <Todo {...todo} key={todo.id} />
              {todos.length > i + 1 && <Divider />}
            </List>
          ))}
        </List>
      </Paper>
    );
  return null;
}
