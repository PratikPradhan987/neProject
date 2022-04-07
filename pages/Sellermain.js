import React from "react";
import Link from "next/link";
import Signup from "../components/Seller/Signup";
import Login from "../components/Seller/Login";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Create an account first! Sign Up</button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Already have an account? Login</button>
  );
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Signup />;
  }
  return <Login />;
}

class Sellermain extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: true };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <>
        <Link href="/seller">
          <img
            className="cursor-pointer h-10 w-10 m-8"
            src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
          />
        </Link>
        <Greeting isLoggedIn={isLoggedIn} />

        <div className="flex flex-row justify-center">
          <div className="text-grey-dark mt-6">
            <a className="no-underline border-b border-blue text-blue">
              {button}
            </a>
          </div>
        </div>

        <footer className="flex-shrink-0  mt-2 border-t-2 border-black">
          <Link href="/">
            <h2 className="h-16 w-full flex justify-center py-2 px-4 font-medium  text-white bg-pink-600 hover:bg-pink-700">
              Go Back to Home Page
            </h2>
          </Link>
        </footer>
      </>
    );
  }
}

// const Sellermain = () => {
//   return (
//     <>
//       <Link href="/seller">
//         <img
//           className="cursor-pointer h-10 w-10 m-8"
//           src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
//         />
//       </Link>
{
  /* <Greeting isLoggedIn={isLoggedIn} /> */
}

//       <div className="flex flex-row justify-center">
//         <div className="text-grey-dark mt-6">
//           Already have an account?
//           <a
//             className="no-underline border-b border-blue text-blue"
//           >
// {button}
//           </a>
//           .
//         </div>
//       </div>
//     </>
//   );
// };

export default Sellermain;
