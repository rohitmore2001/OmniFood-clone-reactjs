import '../styles/HowItWorks.css'
import Meal from './Meal' 

const HowItWorks = () => {
    return (<>
        <div>
            <div className="container">
                <div className="how-it-works">
                    <span className="heading-11">How it works</span>
                    <h2 className="heading-2">
                        Your daily dose of health in 3 simple steps
                    </h2>

                    <div className="row">
                        <div className="col col-md-6">
                            <p className="step-1">01</p>
                            <h3 className="step-1-heading">
                                Tell us what you like (and what not)
                            </h3>
                            <p className="step-1-para">
                                Never again waste time thinking about what to eat! Omnifood AI
                                will create a 100% personalized weekly meal plan just for you. It
                                makes sure you get all the nutrients and vitamins you need, no
                                matter what diet you follow!
                            </p>
                        </div>

                        <div className="col col-md-6 step-1-img">
                            <div className="back-circle" style={{  background:'antiquewhite', padding: '0.8rem'}}>
                                <div className='back-inner-circle' style={{  background:'hwb(28 67% 5%)', padding: '0.8rem',justifyContent:'center'}}></div>
                                <img src="https://omnifood.dev/img/app/app-screen-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container step-2">
                            <div className="row">
                            <div className="col col-md-6 step-1-img">
                            <div className="back-circle" style={{  background:'antiquewhite', padding: '0.8rem'}}>
                                <div className='back-inner-circle' style={{  background:'hwb(28 67% 5%)', padding: '0.8rem',justifyContent:'center'}}></div>
                                <img src="https://omnifood.dev/img/app/app-screen-2.png" alt="" />
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <p className="step-1">02</p>
                            <h3 className="step-1-heading">
                            Approve your weekly meal plan
                            </h3>
                            <p className="step-1-para">
                            Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.
                            </p>
                        </div>                       
                    </div>
                </div>

                <div className="container step-3">
                            <div className="row">
                            
                        <div className="col col-md-6">
                            <p className="step-1">03</p>
                            <h3 className="step-1-heading">
                            Receive meals at convenient time
                            </h3>
                            <p className="step-1-para">
                            Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!                            </p>
                        </div>  

                        <div className="col col-md-6 step-1-img step-3-3">
                            <div className="back-circle" style={{  background:'antiquewhite', padding: '0.8rem'}}>
                                <div className='back-inner-circle' style={{  background:'hwb(28 67% 5%)', padding: '0.8rem',justifyContent:'center'}}></div>
                                <img src="https://omnifood.dev/img/app/app-screen-3.png" alt="" />
                            </div>
                        </div>                     
                    </div>
                </div>
       </div>
        <Meal/>
        </>
    )
}

export default HowItWorks
