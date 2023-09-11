import '../styles/Pricing.css'
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoInfinite } from "react-icons/io5";
import { GiAppleSeeds } from "react-icons/gi";
import { IoIosLeaf } from "react-icons/io";
import { GiPauseButton } from "react-icons/gi";
import OrderMeal from './OrderMeal';
const Pricing=()=>{
    return(
        <>
        <div className="container container-pricing">
        <p className='pricing-head-1'>Pricing</p>
        <h2 className="pricing-head-2">
            Eating well without breaking the bank
          </h2>

          <div className="row">
          <div className='col'>
           <div className="card card-1">
            <div className="card-body" style={{width:'400px'}}>
            <p className='pricing-card-1'>starter</p>
                <p className="card-title"><span className='dollar'>$</span>399 </p>
                <h6 className="card-subtitle mb-2 text-muted">per month. That's just $13 per meal!</h6>
                <ul className='plan-list'>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>1 meal per days</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Order from 11am to 9pm</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Delivery is free</p>
              </li>
              <li class="diet-list">
              <RxCross1 className='AiOutlineCheck'/>
                <p className='diet-list-name'></p>
              </li>
              </ul>
              <div className="buttons" style={{marginTop:'40px'}}>
                 <button type="button" class="btn btn-1" style={{width:'250px',marginLeft:'0px'}}>Start eating well</button>
              </div>
            </div>
           </div>
          </div>
          <div className='col'>
           <div className="card card-2" >
            <div className="card-body" style={{backgroundColor:'#fce9d9',borderRadius:'20px',}}>
            <p className='pricing-card-1'>complete</p>
                <p className="card-title"><span className='dollar'>$</span>649 </p>
                <h6 className="card-subtitle mb-2 text-muted">per month. That's just $11 per meal!</h6>
                <ul className='plan-list'>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'><b>2 meals</b> per day</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Order <b>24/7</b></p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Delivery is free</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Get access to latest recipes</p>
              </li>
              </ul>
              <div className="buttons" style={{marginTop:'35px'}}>
                 <button type="button" class="btn btn-1" style={{width:'250px',marginLeft:'0px'}}>Start eating well</button>
              </div>
            </div>
           </div>
          </div>
          </div>

          <p className='plan-detail'>Prices include all applicable taxes. You can cancel at any time. Both plans include the following:</p>
          

          <div className="row  ">
            <div className="col policy">
            <div>
                    <div className="card">
                       <div style={{height: '60px', width: '60px', borderRadius: '50%', backgroundColor: '#e6bb84', padding:' 0.8',marginLeft:" 2%"}} >
                       <IoInfinite className='IoInfinite'/>
                       </div>
                        <div className="">
                         <blockquote className="policy-name">
                         Never cook again!
                         </blockquote>
                          <p className="policy-text">Our subscriptions cover 365 days per year, even including major holidays.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col policy">
            <div>
                    <div className="card">
                       <div style={{height: '60px', width: '60px', borderRadius: '50%', backgroundColor: '#e6bb84', padding:' 0.8',marginLeft:" 2%"}} >
                       <GiAppleSeeds className='IoInfinite'/>
                       </div>
                        <div className="">
                         <blockquote className="policy-name">
                         Local and organic                         </blockquote>
                          <p className="policy-text">Our cooks only use local, fresh, and organic products to prepare your meals.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col policy">
            <div>
                    <div className="card">
                       <div style={{height: '60px', width: '60px', borderRadius: '50%', backgroundColor: '#e6bb84', padding:' 0.8',marginLeft:" 2%"}} >
                       <IoIosLeaf className='IoInfinite'/>
                       </div>
                        <div className="">
                         <blockquote className="policy-name">
                         No waste
                         </blockquote>
                          <p className="policy-text">All our partners only use reusable containers to package all your meals.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col policy">
            <div>
                    <div className="card">
                       <div style={{height: '60px', width: '60px', borderRadius: '50%', backgroundColor: '#e6bb84', padding:' 0.8',marginLeft:" 2%"}} >
                       <GiPauseButton className='IoInfinite'/>
                       </div>
                        <div className="">
                         <blockquote className="policy-name">
                         Pause anytime
                         </blockquote>
                          <p className="policy-text">Going on vacation? Just pause your subscription, and we refund unused days.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
          </div>
         
        </div>
        <OrderMeal/>
        </>
    )
}

export default Pricing