import { Link } from "react-router-dom";

const Navbar=(props)=>{
    const cake=props.Nab;
    return(
        
       <section className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" className="ps-5"><img src="/images/illustration/logo.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" className="ps-5">
          <Link to={'/'} class="nav-link active" aria-current="page" > Home</Link>
        </li>
        <li class="nav-item" className="ps-5">
          <Link to={'./Product'} class="nav-link active" aria-current="page" >Product</Link>
        </li>
        <li class="nav-item" className="ps-5">
          <Link to={'./About'} class="nav-link active" aria-current="page" >About</Link>
        </li>
        <li class="nav-item" className="ps-5">
          <Link to={'./Blog'} class="nav-link active" aria-current="page" >Blog</Link>
        </li>
        <li class="nav-item" className="ps-5">
          <Link to={'./Contact'} class="nav-link active" aria-current="page" >Contact</Link>
        </li>
        <li class="nav-item" className="ps-5">
          <a class="nav-link active" aria-current="page" href="#" style={{'color':'red'}}><i class="fa-solid fa-phone"></i> +10 (56) 745 3095</a>
        </li>
        <li class="nav-item" className=" ps-5">
          <a class="nav-link active" aria-current="page" href="#" className="btn-header">Order Online</a>
        </li>
        
        
        
        </ul>
    </div>
  </div>
</nav>

       </section>
       
            
        

        
    )
}
export default Navbar;