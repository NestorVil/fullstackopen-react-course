const Filter = ({ setFilter }) => {

  const handleChange = (event) => {
    setFilter(event.target.value);
  } 

  return (
    <div>
      filter shown with a <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default Filter;