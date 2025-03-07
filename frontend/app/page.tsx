'use client';

import { useEffect, useState } from 'react';

export default function Page() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/tasks')
			.then((response) => response.json())
			.then((data) => setTasks(data))
			.catch((error) => console.error('Error fetching tasks:', error));
	}, []);

	return (
		<div>
			<h1>Tasks</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<strong>{task.name}:</strong> {task.description}
					</li>
				))}
			</ul>
		</div>
	);
}
