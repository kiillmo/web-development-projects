function DessertsList(props) {
  // Implement the component here.
  const listItems = props.data.filter(desserts => desserts.calories < 500).sort((a, b) => a.calories - b.calories).map(desserts => {
    const itemText = `${desserts.name} - ${desserts.calories} cal`
    return <li>{itemText}</li>
  })
  return <ul>{listItems}</ul>
}

export default DessertsList;


/*
Meta's way of doing it: 

const DessertsList = (props) => {
 const lowCaloriesDesserts = props.data
   .filter((dessert) => {
     return dessert.calories < 500;
   })
   .sort((a, b) => { 
     return a.calories - b.calories; 
   })
   .map((dessert) => { 
     return ( 
       <li>
         {dessert.name} - {dessert.calories} cal 
       </li> 
     ); 
   }); 
 return <ul>{lowCaloriesDesserts}</ul>; 

}
export default DessertsList; 

*/