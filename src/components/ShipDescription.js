import "./ShipDescription.css";
import { ItemTypes } from '../Constants'
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
    return (shipArray.map((idx) => <td className="ship-tiles"> </td>))
  }

console.log("ship", shipTiles())
  return (
    <div className="left-nav-item"> {name}: <table className="ship-table"><tbody><tr ref={drag}>{shipTiles()}</tr></tbody></table></div>    
  );

};