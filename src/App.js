import { useForm } from "react-hook-form";

function App() {

  const { 
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log("This is the data",data)
  }

  console.log("This is the info from email field", {...register("email")})

  return (
    <div className="App h-screen bg-slate-800 text-yellow-100">
      <h1 className="text-indigo-100">Hello World</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>email</label>
          <input type="text" name="email" {...register("email")}/>
        </div>
        <br />
        <div>
          <label>Password</label>
          <input type="password"  name="password" {...register("password")} />
        </div>
        <br />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
