import { useEffect, useState } from "react";
import Todo from "../components/Todolist";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
  IconMoon,
} from "@tabler/icons";
import { themes } from "../libs/themes";
import { ThemeContext } from "../contexts/ThemeContext";
import Mainlayout from "../layout/MainLayout";

export default function Home() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;

    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;

    setTodos([...todos]);
  };

  const onKeyUpHandler = (event) => {
    if (event.key !== "Enter") return;
    if (event.target.value === "") {
      alert("Todo cannot be empty");
      return;
    }
    const newTodos = [{ title: todoInput, completed: false }, ...todos];
    setTodos(newTodos);
    setTodoInput("");
  };

  useEffect(() => {
    const todosStr = localStorage.getItem("react-todos-1");
    if (!todosStr) setTodos([]);
    else setTodos(JSON.parse(todosStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos-1", todosStr);
  };

  const [selTheme, setSelTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (selTheme.name == "light") setSelTheme(themes.drak);
    else setSelTheme(themes.light);
  };

  return (
    <Mainlayout>
      <div
        style={{
          backgroundColor: selTheme.background,
        }}
      >
        {/* Entire App container (required for centering) */}
        <ThemeContext.Provider value={{ selTheme, toggleTheme }}>
          <div style={{ maxWidth: "700px" }} className="mx-auto">
            {/* App header */}
            <p
              className="display-4 text-center fst-italic m-4"
              style={{ color: selTheme.foreground }}
            >
              Minimal Todo List <span className="fst-normal">☑️</span>
            </p>
            {/* Input */}
            <div className="d-flex justify-content-center gap-2">
              <input
                className="form-control mb-1 fs-4"
                placeholder="insert todo here..."
                onChange={(event) => {
                  setTodoInput(event.target.value);
                }}
                value={todoInput}
                onKeyUp={onKeyUpHandler}
              />
              <button className="btn btn-dark" onClick={toggleTheme}>
                {selTheme.name === "light" && <IconSunHigh />}
                {selTheme.name === "dark" && <IconMoon />}
              </button>
            </div>

            {/* Todos */}
            {todos.map((todo, i) => (
              <Todo
                title={todo.title}
                completed={todo.completed}
                key={i}
                onDelete={() => deleteTodo(i)}
                onMark={() => markTodo(i)}
                onMoveUp={() => moveUp(i)}
                onMoveDown={() => moveDown(i)}
              />
            ))}

            {/* summary section */}
            <p className="text-center fs-4">
              <span className="text-primary">All ({todos.length}) </span>
              <span className="text-warning">
                Pending ({todos.filter((x) => x.completed === false).length})
              </span>
              <span className="text-success">
                Completed ({todos.filter((x) => x.completed === true).length})
              </span>
            </p>
            {/* Made by section */}
            <p className="text-center mt-3 text-muted fst-italic">
              made by Thadpong Sermsook 640610636
            </p>
          </div>
        </ThemeContext.Provider>
      </div>
    </Mainlayout>
  );
}
