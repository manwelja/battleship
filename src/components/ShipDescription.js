import "./ShipDescription.css";
import { ItemTypes } from '../constants'
import { useDrag } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function ShipDescription(props) {
  
  const {name, length} = props;

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.BATTLESHIP,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const shipTiles = () => {
    const shipArray = [];
    for(let i = 0; i < length; i++) {
      shipArray.push(i)
    }    
    return (shipArray.map((idx) => <div className="ship-tiles"> </div>))
  }

console.log("ship", shipTiles())
  return (
    <div>{name}: <div className="ship-container" ref={drag}>{shipTiles()}</div></div>    
  );

};