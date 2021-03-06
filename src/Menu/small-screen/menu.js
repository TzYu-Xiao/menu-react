import React, {useState} from 'react'
import itemData, { itemConfig, button } from '../config/menuData'
import SmallItem from './item'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function SmallMenu(){
    const [show,setShow] = useState(false)
    const [item,setItem] = useState(itemData)
    const [render,setRender] = useState(0)
    function allocateShow(amount){
        setItem(amount)
        setRender(render+1)
    }
    if(show){
        return(            
    <div>
        <div>
        <i className={button.crossButton} onClick={()=>setShow(!show)}></i>
        </div>
    <Router>
    <div className="flex">
        <ul className="smallbackground" style={
            {background:itemConfig.background, color:itemConfig.fontColor}}>
        <h2 style={{textAlign:"center"}}>Menu</h2>
        <SmallItem item={item} allocateShow={allocateShow} setShow={setShow}/>
        </ul>
        <div style={{textAlign:"center"}}>
        <Switch>
            {itemData.map(route=>(
                <Route
                    key={route.id}
                    path={route.path}
                    children={route.function}
                    exact={route.exact}
                />
            ))}
        </Switch>
        </div>
    </div>
    </Router>
    </div>     
        )
    }
    else{
        return(
            <div >
                <i className={button.listButton} onClick={()=>setShow(!show)}></i>   
                <Router>
                <div className="bigToSmall">
                <Switch>
                    {itemData.map(route=>(
                    <Route
                    key={route.id}
                    path={route.path}
                    children={route.function}
                    exact={route.exact}
                    />
                     ))}
                </Switch>
                </div>
                </Router>
                
            </div>
        )
    }
    
}

export default SmallMenu