import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()


    const logout = () => {
        localStorage.clear()
        navigate("/");
    }

    return(
    <nav className="z-50 w-full bg-black pt-3 shadow-md">
        <div className="container flex flex-wrap justify-between mx-auto">
          <div className="ml-6 flex space-x-7" id="navPostAuth">
            <img 
              className="h-12 min-h-full"
              src="https://d10d02tod5sfve.cloudfront.net/poster-photo/2410193-1545024-1665980909415.png"
              alt="new"
            />
            <Link to="/">

              <span className="text-3xl font-roboto font-bold whitespace-nowrap text-white">
                Data Participant
              </span> 
            </Link>
          </div>
          
          {/* <div className="ml-6 flex space-x-8" id="navPostAuth">
             <Link to="/" className="link inactive">
              Home
            </Link>
            <Link to="/" className="link inactive">
              History
            </Link> 
            <Link to="/" className="link inactive">
              Borrow
            </Link> 
            <Link to="/" className="link inactive">
              Return
            </Link> 
            <button className="link inactive" onClick={logout}>
              Logout
            </button>
          </div> */}
        </div>
    </nav>
    )
}