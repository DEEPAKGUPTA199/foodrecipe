import React,{useState} from 'react'
import './section.css'


function Section(props) {
    
    return (
        <div className='container'>
            <div className='row1'>
            <h3>EASYMEALS</h3>
            <select>
                <option>ALL CATEGORIES</option>
            </select>
            <input id="container_input" type="text" placeholder='Search recipie'></input>
            <h5>Favorites</h5>
            <h5>Cart</h5>
            </div>
        <div className='container1'>
            <div className='column1'>
                <h4>Filter Recipes:</h4>
                <p>Check multiple boxex below to narrow recipe search result </p>
                <h4>By Search:</h4>
                <div className='input1'><input type="checkbox" />
                <label>Autumn</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Spring</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Winter</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Summar</label><br></br></div>

                <h4>By Dietary Preference</h4>
                <div className='input1'><input type="checkbox" />
                <label>Dairy Free</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Egg Free</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Gluten Free</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Healthy</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Quick and Easy</label><br></br></div>

                <h4>Meal</h4>
                <div className='input1'><input type="checkbox" />
                <label>BreakFast</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Dessert</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Dinner</label><br></br></div>
                <div className='input1'><input type="checkbox" />
                <label>Holidays</label><br></br></div>
                
                <h4>Search Recipes Titles:</h4>
                <div className='input1'>
                <input id="search" type="text" value={props.search} onChange={props.inputChange} placeholder='Enter Keyword'></input>
                </div>
            </div>
                <div className='column2'>
                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>
                    
                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>
                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>

                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>

                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>

                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>

                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>

                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>
                    <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>
                   
                    
                   
                
            </div>
            
        </div>
    </div>
    )
}

export default Section
