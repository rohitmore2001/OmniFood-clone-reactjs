import '../styles/OrderMeal.css'
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { GrTwitter } from "react-icons/gr";
const OrderMeal=()=>{
    return(<>
        <div className="container order-form">
            <div className="row main-form">
                <div className="col col-md-7 left-form">
                <h2 class="order-meal-head">Get your first meal for free!</h2>
                <p class="order-meal-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <form class="sign-up-form">
                <div>
                  <label for="full-name">Full Name</label>
                  <input id="full-name" type="text" placeholder="John Smith" name="full-name" required="" />
                </div>
                <div>
                  <label for="email">Email address</label>
                  <input id="email" type="email" placeholder="me@example.com" name="email" required="" />
                </div>
                <div>
                  <label for="select-where">Where did you hear from us?</label>
                  <select id="select-where" name="select-where" required="" >
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <button class="btn btn--form" >Sign up now</button>
             </form>
                </div>

                <div className="col col-md-4 order-img ">
                <img src="https://omnifood.dev/img/eating.jpg" alt=""  />                </div>
            </div>
        </div>


        <div className="footer container">
            <div className="social footer-gap">
                <div className="footer-logo">
                    <img src="https://omnifood.dev/img/omnifood-logo.png" alt="" />
                </div>
            <ul class="social-links">
            <li>
              <a class="footer-link" href="#"><FaInstagram/></a>
            </li>
            <li>
              <a class="footer-link" href="#"><SiFacebook/></a>
            </li>
            <li>
              <a class="footer-link" href="#"><GrTwitter/></a>
            </li>
          </ul>
          <p class="copyright">
            Copyright © 2023 by Omnifood, Inc.
            All rights reserved.
          </p>

            </div>
            <div class="address-colfooter-gap ">
             <p class="footer-heading">Contact us</p>
             <address class="contacts">
            <p class="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class="footer-link-1">415-201-6370</a><br/>
              <a class="footer-link-1" >hello@omnifood.com</a>
            </p>
          </address>
            </div>

            <div class="account footer-gap">
             <p class="footer-heading">Account</p>
              <ul>
                <li>Create account</li>
                <li>Sign in</li>
                <li>iOS app</li>
                <li>Android app</li>
              </ul>
        </div>

        <div class="account footer-gap">
             <p class="footer-heading">Company</p>
              <ul>
                <li>About Omnifood</li>
                <li>For Business</li>
                <li>Cooking partners</li>
                <li>Careers</li>
              </ul>
        </div>

        <div class="account footer-gap">
             <p class="footer-heading">Resources</p>
              <ul>
                <li>Recipe directory</li>
                <li>Help center</li>
                <li>Privacy & terms</li>
                
              </ul>
        </div>


        </div>
        </>
    )
}

export default OrderMeal