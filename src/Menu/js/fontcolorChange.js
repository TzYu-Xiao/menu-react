import {itemConfig} from '../config/menuData'

function fontcolorChange(i,show) {
    show.forEach(e => {
        e.submenu.forEach(e => {
            if(e.id===i){
                e.color=itemConfig.colorChange 
              }
              else{
                e.color=itemConfig.fontColor
              }
        });
        
    });
   
    return show
}

export default fontcolorChange