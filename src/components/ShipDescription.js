import "./ShipDescription.css";

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function shipDescription(props) {
  
  const {name, length} = props;

  const shipTiles = () => {
    const shipArray = [];
    for(let i = 0; i < length; i++) {
      shipArray.push(i)
    }    
    return (shipArray.map((idx) => <td className="ship-tiles"> </td>))
  }

console.log("ship", shipTiles())
  return (
    <div className="left-nav-item"> {name}: <table className="ship-table"><tbody><tr>{shipTiles()}</tr></tbody></table></div>    
  );

};