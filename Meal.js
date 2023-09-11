import '../styles/Meal.css' 
import { LiaFireSolid } from "react-icons/lia";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsStar } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import Testimonials from './Testimonials';
const Meal=()=>{
    return(
        <>
        <div className="container meal-container">
            <p className='head-meal'>Meals</p>
            <h2 className="meal-heading-1">
            Omnifood AI chooses from 5,000+ recipes
          </h2>

          <div className="row">
            <div className="col col-meal">
               <div className="card meal-card-1" >
                <img src="https://omnifood.dev/img/meals/meal-1.jpg" className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <div className="meal-type">
                        <span className='vegetarian'>Vegetarian</span>
                    </div>
                    <p className="meal-name">Japanese Gyozas</p>
                    <ul className="meal-data">
                <li className="meal-description">
                  <LiaFireSolid className='LiaFireSolid' />
                  <p className="meal-sub-description"><strong>650</strong> calories</p>
                </li>
                <li className="meal-description">
                 <IoRestaurantOutline className='LiaFireSolid'/>
                  <p className="meal-sub-description">NutriScore ® <strong>74</strong></p>
                </li>
                <li className="meal-description">
                 <BsStar className='LiaFireSolid'/>
                  <p className="meal-sub-description"><strong>4.9</strong> rating (537)</p>
                </li>
              </ul>
                  </div>
                </div>
            </div>

            <div className="col col-meal">
               <div className="card meal-card-1" >
                <img src="https://omnifood.dev/img/meals/meal-2.jpg" className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <div className="meal-type">
                        <span className='vegan'>Vegan</span>
                        <span className='paleo'>Paleo</span>
                    </div>
                    <p className="meal-name">Japanese Gyozas</p>
                    <ul className="meal-data">
                <li className="meal-description">
                  <LiaFireSolid className='LiaFireSolid' />
                  <p className="meal-sub-description"><strong>400</strong> calories</p>
                </li>
                <li className="meal-description">
                 <IoRestaurantOutline className='LiaFireSolid'/>
                  <p className="meal-sub-description">NutriScore ® <strong>92</strong></p>
                </li>
                <li className="meal-description">
                 <BsStar className='LiaFireSolid'/>
                  <p className="meal-sub-description"><strong>4.8</strong> rating (537)</p>
                </li>
              </ul>
                  </div>
                </div>
            </div>


            <div className="col col-meal">               
                <h3 class="diets">Works with any diet:</h3>
                <ul >
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Vegetarian</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Vegan</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Pescatarian</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Gluten-free</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Lactose-free</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Keto</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Paleo</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Low FODMAP</p>
              </li>
              <li class="diet-list">
              <AiOutlineCheck className='AiOutlineCheck'/>
                <p className='diet-list-name'>Kid-friendly</p>
              </li>
              </ul>
            </div>

            <div className="row ">
              <p className='see-all-recipes '>See all recipes <HiArrowLongRight className='HiArrowLongRight'/></p>
            </div>
          </div>
        </div>

        <Testimonials/>
        </>
    )
}

export default Meal;