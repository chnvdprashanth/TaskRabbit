import { GoogleLogin } from "@react-oauth/google";
import { getUserDetails } from "../utils/userData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleResponse = async (response) => {
    try {
      const user = getUserDetails(response);

      console.log(JSON.stringify(user))

      const res = await fetch("http://localhost:5173/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const User = await res.json();
      console.log(User)
      localStorage.setItem("user", JSON.stringify(User));

      navigate("/", { replace: true });
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-800">
      <div className="flex flex-col items-center gap-y-8 bg-zinc-900 p-16 max-sm:p-8 rounded-3xl shadow-xl ">
        <div className="w-80 max-sm:w-64 flex items-center justify-center text-4xl">
          <p>🐇</p>
          <span className="text-white font-semibold">Task Rabbit</span>
        </div>
        <div className="">
          <GoogleLogin
            type="standard"
            theme="filled_black"
            shape="circle"
            size="large"
            onSuccess={handleResponse}
            onError={handleResponse}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
