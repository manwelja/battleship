export default function Overlay(props) {
 //console.log(props.shipToDrop)
  return (
    <div
    style={{
      height: '100%',
      width: '100%',
      opacity: 0.5,
      backgroundColor: 'black',
    }}>{props.shipToDrop}</div>
  );

};