import React, { useContext, useState, useEffect } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const quotes = [
    "Your mental health is just as important as your physical health",
    "It’s okay not to be okay",
    "You are not your mental illness",
    "Your struggles do not define you",
    "Taking care of your mental health is an act of self-love",
    "You are worthy of happiness and peace of mind",
    "There is no shame in seeking help for your mental health",
    "It’s okay to take a break and prioritize your mental health",
    "You are not alone in your struggles",
    "It’s okay to ask for support when you need it",
    "It’s okay to prioritize your mental health over other commitments",
    "You are not alone in your journey towards better mental health",
    "You are worthy of a life filled with joy and happiness"
];

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomNumber]);
    }, []); // Empty dependency array ensures that the effect runs only once on component mount

    return (
        <div className='main'>
            <div className="nav">
                <p>A.U.R.A</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <div>
                        <div className="greet">
                            <p><span>AURA: Acceptance, Understanding, Resilience, Assistance</span></p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Tell me about your sleeping habits over the past 3 months. <br /> Have you noticed any changes? Difficulty sleeping? Restlessness?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Let’s talk about how often you have felt satisfied with yourself over the past 3 months</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Describe how ‘supported’ you feel by others around you – your friends, family, or otherwise.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Tell me  any important activities or projects that you’ve been involved with recently. How much enjoyment do you get from these?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p > {resultData} </p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='How are you feeling today!? ' />
                        <div>
                            {input ? (
                                <img onClick={() => onSent()} src={assets.send_icon} />
                            ) : null}
                        </div>
                    </div>
                </div>
                <p className='bottom-info'>{quote}</p>
            </div>
        </div>
    );
}

export default Main;
