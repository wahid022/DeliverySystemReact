import { useAuth } from "../Authentication/Auth";
import { Link } from "react-router-dom";


const NavBar =(props) =>{
  let auth=useAuth();

// handleLogout is used to call logout object of useAuth annd hence it logouts from the page..
const handleLogout=()=>{
  localStorage.clear();
  auth.logout();
}


    return(
      <nav class="navbar navbar-expand-lg">
      {/* <div class="container-fluid"> */}
        <Link to="/inventory" class="navbar-brand  text-light m-2 px-3" href="#">Inventory Dashboard</Link>
        <button class="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span class="navbar-toggler-icon"></span> */}
          <i class="fa-solid fa-bars white-icon"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav text-center" >

                                <li className="nav-item active mx-2" onClick={()=>{props.onClick("Dashboard")}}>
                                  <span className="nav-link text-light" role="button">Home</span><span className="sr-only">(current)</span>
                                    {/* <Link to="/inventory" >Home </Link> */}
                                </li>




                                <li className="nav-item active mx-2" onClick={()=>{props.onClick("Profile")}}>
                                <span className="nav-link text-light" role="button">Profile</span><span className="sr-only">(current)</span>

                                    {/* <Link to="/profile" className="nav-link text-light">Profile <span className="sr-only">(current)</span></Link> */}
                                </li>



                                <li className="nav-item mx-2" onClick={()=>{props.onClick("AddProduct")}}>
                                <span className="nav-link text-light" role="button">Add Product</span><span className="sr-only">(current)</span> 
                                    {/* <Link to="/addproduct" className="nav-link text-light">Add Product</Link> */}
                                </li>



                                <li className="nav-item mx-2" onClick={()=>{props.onClick("UpdateInventory")}}>
                                <span className="nav-link text-light" role="button">Update Inventory</span><span className="sr-only">(current)</span> 
                                    {/* <Link to="/updateproduct" className="nav-link text-light">Update Inventory</Link> */}
                                </li>


                                <li className="nav-item mx-2" onClick={()=>{props.onClick("CheckAvailability")}}>
                                <span className="nav-link text-light" role="button">Check Availability</span><span className="sr-only">(current)</span> 
                                    {/* <Link to="/updateproduct" className="nav-link text-light">Update Inventory</Link> */}
                                </li>




                                <li className="nav-item mx-2" onClick={()=>{props.onClick("FilterProduct")}}>
                                <span className="nav-link text-light" role="button">Filter Product</span><span className="sr-only">(current)</span> 
                                    {/* <Link to="/updateproduct" className="nav-link text-light">Update Inventory</Link> */}
                                </li>




                                <li className="nav-item mx-2" onClick={()=>{props.onClick("GenerateReport")}}>
                                <span className="nav-link text-light" role="button">Generate Report</span><span className="sr-only">(current)</span> 
                                    {/* <Link to="/updateproduct" className="nav-link text-light">Update Inventory</Link> */}
                                </li>




{/* 
                                <li className="nav-item mx-2">
                                    <Link to="/availability" className="nav-link text-light">Check Availability</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link  to="/filter" className="nav-link text-light">Filter Product</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="/generate" className="nav-link text-light">Generate Report </Link>
                                </li> */}
                                <li className="nav-item mx-2">
                                  <button className="btn btn-outline-warning my-2 my-sm-0 bg-dark text-light" onClick={handleLogout}>Logout</button>

                                </li>
                                
                                </ul>

        {/* <button className="btn btn-outline-warning my-2 my-sm-0 bg-dark text-light" onClick={handleLogout}>Logout</button> */}
          
        </div>

      {/* </div> */}
    </nav>
    )
}

export default NavBar