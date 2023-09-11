import HowItWorks from './HowItWorks';
import '../styles/OmniFoodHome.css'
import { BsArrowDown } from "react-icons/bs"; 

const OmniFoodHome=()=>{
    return(
      <>

      <div className="front">
      <header className="header">
      <a href="/">
        <img className="brand-logo" alt="Omnifood logo"src="https://omnifood.dev/img/omnifood-logo.png"/>
      </a>

      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="main-nav-list navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item"><a className="nav-link" href="/">How it works</a></li>
          <li  className="nav-item"><a className="nav-link " href="/">Meals</a></li>
          <li>
            <a className="nav-link" href="/">Testimonials</a>
          </li>
          <li className="nav-item"><a className="nav-link" href="/">Pricing</a></li>
          <li  className="nav-item nav-item-btn"><button type="button" class="btn btn-01">Try for free</button></li>
        </ul>
    </div>
  </div>
</nav>
     </header>

     <div className="row row-main ">
      <div className="col col-md all-content">
        <div className="row">
        <h1 className='heading-1'>A healthy meal <br /> delivered to your door,<br /> every single day</h1>
        </div>
        <div className="row">
         <p className='description'>The smart 365-days-per-year food subscription that will <br /> make you eat healthy again. Tailored to your personal tastes <br /> and nutritional needs.</p> 
       </div>

       <div className="buttons">
       <button type="button" class="btn btn-1">Start eating well</button>
        <button type="button" class="btn btn-2">Learn more<BsArrowDown/></button>
       </div>

       <div>
       <div class="below-description">
              <div class="description-img">
                <img src="https://omnifood.dev/img/customers/customer-1.jpg" alt="Customer photo"/>
                <img src="https://omnifood.dev/img/customers/customer-2.jpg" alt="Customer photo"/>
                <img src="https://omnifood.dev/img/customers/customer-3.jpg" alt="Customer photo"/>
                <img src="https://omnifood.dev/img/customers/customer-4.jpg" alt="Customer photo"/>
                <img src="https://omnifood.dev/img/customers/customer-5.jpg" alt="Customer photo"/>
                <img src="https://omnifood.dev/img/customers/customer-6.jpg" alt="Customer photo"/>
              </div>
              <p class="side-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
       </div>
      </div>
      <div className=" col col-md">
      <img className='image-right' src="https://omnifood.dev/img/hero.webp" alt=""  />
      </div>
     </div>
     </div>

     <div className="asfeatured container">
     <h2 class="heading-asfeatured">As featured in</h2>
      <div className="row featured-row">
      
<div className="col col-md col-sm">  <img src="https://omnifood.dev/img/logos/techcrunch.png" alt="Techcrunch logo" className='asfeatured-img' />
</div>     
<div className="col col-md col-sm">  <img src="https://omnifood.dev/img/logos/business-insider.png" alt="Business Insider logo"  className='asfeatured-img'/>
</div> 
<div className="col col-md col-sm"> <img src="https://omnifood.dev/img/logos/the-new-york-times.png" alt="The New York Times logo" className='asfeatured-img' />
</div> 
<div className="col col-md col-sm">  <img src="https://omnifood.dev/img/logos/forbes.png" alt="Forbes logo" className='asfeatured-img' />
</div> 
<div className="col col-md col-sm">  <img src="https://omnifood.dev/img/logos/usa-today.png" alt="USA Today logo" className='asfeatured-img' />
</div>   
  
          </div>
      </div>

    

     <HowItWorks/>

     </>
    )
}

export default OmniFoodHome;