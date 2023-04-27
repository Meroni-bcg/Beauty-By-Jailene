import {Link} from "react-router-dom";

export default function LoginPage() {
    return (
      <div className="mt-4 grow flex items-center justify-around">
      <div className="mt-4 grow flex items-center justify-around" style={{background: 'linear-gradient(110deg, #f0e3d2, #f7e3d4, #bf8f72, #873e00)', minHeight: '100vh', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        <div className="mb-64">
        <h1 className="text-4xl text-center mb-4 text-orange-700">Login</h1>
        <form className="max-w-md mx-auto ">
          <input type="email" placeholder="your@email.com"/>
          <input type="password" placeholder="password" />
          <button className="login">Login</button>
         {/* <button className="login">Sign In</button>*/}
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Sign Up now</Link>
          </div>
        </form>
        </div>
</div>
      </div>

    );
}