import React, { useEffect, useState, useContext } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
  IconMoon,
} from "@tabler/icons";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todo(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { selTheme } = useContext(ThemeContext);
  return (
    <div
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      style={{ color: selTheme.foreground }}
    >
      <div
        className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
        style={props.completed ? { textDecoration: "line-through" } : null}
      >
        <span className="me-auto">{props.title}</span>

        {isMouseOver && (
          <>
            <button className="btn btn-success" onClick={() => props.onMark()}>
              <IconCheck />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => props.onMoveUp()}
            >
              <IconArrowUp />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => props.onMoveDown()}
            >
              <IconArrowDown />
            </button>
            <button className="btn btn-danger" onClick={() => props.onDelete()}>
              <IconTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
