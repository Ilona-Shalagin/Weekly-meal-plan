const MyList = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {
    return(  <div>
        <div>
            <h1>Weekly Meal Plans Ideas</h1>
            <button onClick = {addMeal} className = "button-add">Add</button>
        </div>
        <div>
         {mealPlans.map(({id,title,mealForADay},item) => (
            <div key = {item} className = {`meal ${id === selectedDay ? "selected" : "default"}`}
            onClick = {() => setSelectedDay(id)}>
                <p className="field">{title}</p>
                <button onClick = {() => deleteDay(id)} className = "button-delete">Delete</button>
                <p className="field">{mealForADay.substring(0, 60)}</p>
            </div>
         ))}
        </div>
    </div>
)}
export default MyList;