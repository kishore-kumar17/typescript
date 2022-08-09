import { useRef } from "react";

const NewTodo = () => {
  const newtodoref = useRef<HTMLInputElement>(null);
  // console.log(newtodoref);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const text = newtodoref.current!.value;

    if (text.trim().length === 0) {
      return;
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">name</label>
        <input type="text" id="text" ref={newtodoref} />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default NewTodo;
