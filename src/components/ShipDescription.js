import "./ShipDescription.css";
import { ItemTypes } from '../constants'
import { useDrag } from 'react-dnd'
import classNames from 'classnames'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function ShipDescription(props) {
  
  const {name, length, color} = props;

  const shipTilesClass = classNames("ship-tiles", {
    " green": color === "green",
    " blue": color === "blue",
    " yellow": color === "yellow",
    " purple": color === "purple",
    " beige": color === "beige"
 }); 

  const [{type, isDragging}, drag] = useDrag(() => ({
    type: props.name,
    item: {shipType:props.name},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      type: props.name
    }),   
  }), )

  const shipTiles = () => {
    const shipArray = [];
    for(let i = 0; i < length; i++) {
      shipArray.push(i)
    }    
    return (shipArray.map((idx) => <div id={idx} className={shipTilesClass}> </div>))
  }

  return (
    <div>{name}:
         <div 
            className="ship-container" 
            ref={drag}>
            {shipTiles()}
         </div>
    </div>    
  );

};