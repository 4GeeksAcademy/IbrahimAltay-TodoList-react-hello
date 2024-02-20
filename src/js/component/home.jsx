import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue,SetInputValue] = useState("")
	const [todos,SetTodos] = useState([])

		//Add into array ->concat
		//Delete from array ->filter
		//Update -> map
	return (
		
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input type="text" 
					onChange={(e)=>SetInputValue(e.target.value)}
					value={inputValue}

					onKeyPress={(e)=>{
						if(e.key === "Enter"){
							SetTodos(todos.concat(inputValue));
							SetInputValue("")
						}
					}}
					placeholder="What do you need to do ?" />
					</li>
						
						{todos.map((item,index)=>(
							<li>
							{item}{" "} <i class="fas fa-trash-alt"
							onClick={()=>
							SetTodos(todos.filter(
								(t,currentIndex)=>
								index != currentIndex
							))
							}
							></i>
							</li>
						))}
			
			</ul>
			<div>{todos.length}</div>
		</div>
	);
};

export default Home;
