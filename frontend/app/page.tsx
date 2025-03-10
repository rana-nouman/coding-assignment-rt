'use client';

import { useEffect, useState } from 'react';

export default function Page() {
	const [books, setbooks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/books')
			.then((response) => response.json())
			.then((data) => setbooks(data))
			.catch((error) => console.error('Error fetching books:', error));
	}, []);

	return (
		<div>
			<h1>books</h1>
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						<strong>{book.name}:</strong> {book.category}
					</li>
				))}
			</ul>
		</div>
	);
}
