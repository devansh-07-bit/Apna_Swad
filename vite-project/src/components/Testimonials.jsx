    import React from 'react'
    import './Testimonials.css'
    import next_icon from '../assets/next_icon.png';
    import back_icon from '../assets/back_icon.png';
    import user_1 from '../assets/user_1.png';
    import user_2 from '../assets/user_2.png';
    import user_3 from '../assets/user_3.png';
    import user_4 from '../assets/user_4.png';


    const Testimonials = () => {
    return (
            <div className="slider">
                <input type="radio" name='slider' id='slide1' checked //checked specifies that radio button is selected
                    /> 
                    <input type="radio" name='slider' id='slide2' checked />
                    <input type="radio" name='slider' id='slide2' checked />
                    
                        <div className="slide">
                            <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Nikita Bharate </h3>
                                <span> Pune , India  </span>
                            </div>
                            </div>
                            <p>
                                It was a Great Experience , and Food Quality Was Amazing.
                            </p>
                        </div>
                
                        <div className="slide">
                            <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Devansh Asati </h3>
                                <span> Pune , India  </span>
                            </div>
                            </div>
                            <p>
                                It was a Great Experience , and Food Quality Was Amazing.
                            </p>
                        </div>
                    
                        <div className="slide">
                            <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Shrusti Jadhav </h3>
                                <span> Pune , India  </span>
                            </div>
                            </div>
                            <p>
                                It was a Great Experience , and Food Quality Was Amazing.
                            </p>
                        </div>
                
                        <div className="slide">
                            <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Tanush Kartiye </h3>
                                <span> Pune , India  </span>
                            </div>
                            </div>
                            <p>
                                It was a Great Experience , and Food Quality Was Amazing.
                            </p>
                        </div>

                        <div class="navigation">
                        <label for="slide1" class="nav-btn"></label>
                        <label for="slide2" class="nav-btn"></label>
                        <label for="slide3" class="nav-btn"></label>
                        </div>
            </div>
    )
    }

    export default Testimonials