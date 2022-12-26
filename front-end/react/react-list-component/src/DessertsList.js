function DessertsList(props) {
  // Implement the component here.
  const listItems = props.data.filter(desserts => desserts.calories < 500).sort((a, b) => a.calories - b.calories).map(desserts => {
    const itemText = `${desserts.name} - ${desserts.calories} cal`
    return <li>{itemText}</li>
  })
  return <ul>{listItems}</ul>
}

export default DessertsList;
