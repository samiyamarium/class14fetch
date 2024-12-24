const DynamicBook = async (props: any) => {
	// const url = await fetch(`https://simple-books-api.glitch.me/books/8342398432489`);
	const url = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${props.params.id}`
	);
	const res = await url.json();
	
	return (
		<h1 className='pl-5 text-5xl  text-blue-950 text-center py-8 outline outline-4 outline-gray-500'>
			{"ID:"}{props.params.id} <br /><br/>
			{"Title:"}{res.title} <br /><br/>
			{"UserID:"}{res.userId} <br />
		</h1>
	);
};

export default DynamicBook;