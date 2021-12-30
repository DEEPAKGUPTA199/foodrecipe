import React,{useState} from 'react'
import './section.css';


function Section() {
    const Recipes =[
    {
         id:    1,
        name:"Egg free",
        image:"https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg",
        desc: "PEANUT BUTTER FRENSH TOAST ROLL..EGG FREE"
    },
    {
         id:    2,
        name:"Egg free",
        image:"https://www.edamam.com/food-img/0a1/0a1b6f30cb99e1842cac6167f6f424d7.jpg",
        desc: "CHOCOLATE..EGG FREE"
    },
    {
        id:    3,
        name:"Diary free",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/baked-sea-bass-with-lemon-caper-dressing-1a597a8.jpg?quality=90&webp=true&resize=300,272",
        desc: "Baked sea bass with lemon caper dressing"
    },
    {
        id:    4,
        name:"Dairy free",
        image:"https://www.edamam.com/web-img/58f/58f2e5548be1fe0414a979668944079b.jpg",
        desc: "ALMOND BUTTER..EGG FREE"
    },
    {
        id:    5,
        name:"Diary free",
        image:"https://www.edamam.com/web-img/196/19615b48db154075b8e5ab1df0a022e9.jpg",
        desc: "CHOCOLATE"
    },
    {
        id:    6,
        name:"Healthy",
        image:"https://assets.bonappetit.com/photos/5a30110d5a60b108cf7a8fce/1:1/w_1600,c_limit/healthyish-sweetpotatoquiche-horizontal.jpg",
        desc: "Simple Quiche with Sweet Potato Crust"
    },
    {
        id:    7,
        name:"Gluten free",
        image:"https://assets.bonappetit.com/photos/58ee903065445d669227652c/1:1/w_1600,c_limit/gluten-free-coconut-bread.jpg",
        desc: "Gluten-Free Coconut Bread"
    },
    {
        id:    8,
        name:"Healthy",
        image:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/07/Salmon-Avocado-Salad-5-1.jpg",
        desc: "SALMON AVOCADO SALAD"
    },
    {
        id:    9,
        name:"Quick and Easy",
        image:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/12/Breakfast-Casserole-16.jpg",
        desc: "BEST BREAKFAST CASSEROLE"
    },
   
];
const[searchtext,setsearchtext]=useState();
const[data,setData]=useState(Recipes);
const[foodname,setFoodname]=useState({items:Recipes, checked:false});

const handleCheckBox = (e)=>{
    if(!foodname.checked){
    setFoodname({items:Recipes, checked:true});
}else {
    setFoodname({items:Recipes, checked:false})
}
    
}
   


const handleChange=(value)=>{
    setsearchtext(value);
    filterdata(value);
}
const filterdata=(value)=>{
   const lowercasevalue=value.toLowerCase().trim();
   if(!lowercasevalue){
       setData(Recipes);
   }else{
       const filteredData=Recipes.filter(item =>{
           return Object.keys(item).some(key=>{
               return item[key].toString().toLowerCase().includes(lowercasevalue);
           })
       });
       setData(filteredData);
   }
}
    


    return (
        <div className='container'>
            <div className='row1'>
            <h3>EASYMEALS</h3>
            <select>
                <option>ALL CATEGORIES</option>
            </select>
            <input id="container_input" type="text" value={searchtext} onChange={e=>handleChange(e.target.value)} placeholder='Search recipie'></input>
            <h5>Favorites</h5>
            <h5>Cart</h5>
            </div>
        <div className='container1'>
            <div className='column1'>
                <h4>Filter Recipes:</h4>
                <p>Check multiple boxex below to narrow recipe search result </p>
                <h4>By Search:</h4>
                
                <div className='input1'><input type="checkbox" id="Autumn" checked={foodname.checked}  onChange={handleCheckBox} />
                <label for="Autumn">Autumn</label><br></br></div>
                <div className='input1'><input type="checkbox" id="Spring"  />
                <label >Spring</label><br></br></div>
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
                <input id="search" type="text" value={searchtext} onChange={e=>handleChange(e.target.value)} placeholder='Enter Keyword'></input>
                </div>
            </div>
            
               
                  
                   <div className='column2'>              
               
                { foodname.checked?  <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" alt="img"></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div>    :          
                (data.map((r,i)=>{
                        return <div className='image' key={i} alt="img">
                        <img src={r.image} />
                        <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>{r.desc}</h3>
                         </div>})
                
                )
            }
                    
                    
                    
                    
                    <div className='clearboth'>
                        {data.length === 0 && <span>No record found to display</span>}
                    </div>
                    </div>
                    
                    {/* <div className='image'>
                    <img src="https://www.edamam.com/web-img/fb9/fb9f410fbcbd37ac989258dcee8f1052.jpg" ></img>
                    <ul>
                        <li>30 minutes</li>
                        <li>Super Easy</li>
                    </ul>
                    <h3>desc</h3>
                    </div> */}
{/*                     
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
                    </div> */}
                   
                    
                   
                
            
            
        </div>
    </div>
    )
}


export default Section
