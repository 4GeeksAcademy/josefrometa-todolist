import { array } from "prop-types";
import React, { useState } from "react";


//create your first component
const Home = () => {
//Definimos los estados 
	//task guarda lo escrito en el input
	const [task, setTask] = useState("");
	//savetask guarda las tareas en un array
	const [saveTask, setSaveTask] = useState([]);

	//Guarda lo que escribimos en el input (Usamos un objeto que verificamos en el navegador, el objeto es el eveto a partir del evento buscamos el valor)
	function handleTask(event) {
		setTask(event.target.value)
	}
	//Funcion que agrega tareas a la lista
	function handleTaskList(event) {
		if (event.key == "Enter") {
			if (task.trim() !== "") {
				setSaveTask([...saveTask, task.trim()])
				setTask("");
			}
		}
	}
	//Funcion que borra tareas de la lista (Realmente solo filtramos)
	function handleDelete (index) {
		let filterTask = saveTask.filter((item, indexFilter) => index !== indexFilter  )
		setSaveTask(filterTask)
	}
	return (

		<div className="container d-flex flex-column justify-content-center">
			<h1 className="text-center">TO DO LIST</h1>
			<div className="row justify-content-center">
				<div className="col-6 text-center">
					<input onChange={handleTask} value={task} onKeyDown={handleTaskList} className="w-100 rounded border-secondary" placeholder="Añadir Tarea" />
				</div>
				<ol>
					{/* Esta funcion Map agrega las tareas visualmente a la lista */}
					{
						saveTask.map((item, index) => {
							return (<li className="border-bottom d-flex justify-content-between"  key={index}>
								<span>{item}</span> <i onClick={() => handleDelete(index)} className="fa-solid fa-trash"></i> </li>)
						})
					}
				</ol>
				{/* Señalamos la cantidad de tareas guardadas */}
				<p>
				{saveTask.length >= 0 ? `There are ${saveTask.length} task.` : `There are no task`}
				</p>
			</div>
		</div>


	);
};

export default Home;
