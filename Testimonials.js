import '../styles/Testimonials.css'
import Pricing from './Pricing'

const Testimonials=()=>{
    return(
        <>
     <div className="row testimonials-row">
        <div className="col testimonials-head">              
                <p className='testimonials-head-1'>Testimonials</p>
            <h2 className='testimonials-head-2'>Once you try it, you can't go back</h2>
           
            <div className="testimonials">
               <div className="row">
                <div className="col testi-col">
                    <div className="card">
                       <img className='testimonial-1' src="https://omnifood.dev/img/customers/dave.jpg" alt="" />
                        <div className="">
                         <blockquote className="testimonial-text">
                          Inexpensive, healthy and great-tasting meals, without even
                          having to order manually! It feels truly magical.
                          </blockquote>
                          <p className="testimonial-name">— Dave Bryson</p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card">
                       <img className='testimonial-1' src="https://omnifood.dev/img/customers/ben.jpg" alt="" />
                        <div className="">
                         <blockquote className="testimonial-text">
                         The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!
                          </blockquote>
                          <p className="testimonial-name">— Ben Hadley</p>
                        </div>
                    </div>
                </div>    
              </div>
            </div>

            
            <div className="testimonials ">
               <div className="row">
                <div className="col testi-col testimonial-row-2">
                    <div className="card">
                       <img className='testimonial-1' src="https://omnifood.dev/img/customers/steve.jpg" alt="" />
                        <div className="">
                         <blockquote className="testimonial-text">
                         Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!
                          </blockquote>
                          <p className="testimonial-name">— Steve Miller</p>
                        </div>
                    </div>
                </div>
                <div className="col testimonial-row-2">
                    <div className="card">
                       <img className='testimonial-1' src="https://omnifood.dev/img/customers/hannah.jpg" alt="" />
                        <div className="">
                         <blockquote className="testimonial-text">
                         I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic. </blockquote>
                          <p className="testimonial-name">— Hannah Smith</p>
                        </div>
                    </div>
                </div>    
              </div>
            </div>
        </div>

        <div className="col gallery-col">
        <div className="gallery">
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-1.jpg" alt="Photo of beautifully
            arranged food"/>
           
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-2.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-3.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-4.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-5.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-6.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-7.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-8.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-9.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-10.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-11.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
          <figure className="gallery-item">
            <img src="https://omnifood.dev/img/gallery/gallery-12.jpg" alt="Photo of beautifully
            arranged food"/>
          </figure>
        </div>
        </div>
     </div>

     <Pricing/>

        </>
    )
}

export default Testimonials