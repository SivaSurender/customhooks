import useForm from "./hooks/useForm";

function Form() {
  const { values, handleChange, handleSubmit } = useForm(
    {
      username: "",
      password: "",
    },
    (values) => console.dir(values)
  );

  const { username, password } = values;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
