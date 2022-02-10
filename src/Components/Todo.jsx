import { useEffect, useState } from "react";
import { useAPI } from "../Hooks/useApi";

export const Todo = () => {
  const { loading, error, data, fetchApi, updateApi } = useAPI([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const updateData = () => {
    let payload = {
      value,
      isCompleted: false,
      createdAt: Date.now()
    };
    updateApi(
      fetch(`https://masai-react-assignment.herokuapp.com/todo`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      })
    ).then(() => setValue(""));
  };

  useEffect(() => {
    fetchApi(
      fetch(
        `https://masai-react-assignment.herokuapp.com/todo?_page=${page}&_limit=5`
      )
    );
  }, [page]);

  if (loading) return <div>Loading ...</div>;
  else if (error) return <div>Error ...</div>;
  else
    return (
      <div>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
          <button onClick={updateData}>ADD</button>
        </div>
        {data.map((todo) => {
          return <li key={todo.id}>{todo.value}</li>;
        })}
        <div>
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
};
