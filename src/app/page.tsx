
export default async function Home(props:any) {
  const url = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${props.params.id}`
	);
	const res = await url.json();
	console.log("Response", res);
    return (
      <div>
      <div>
     {
      <h1 className='pl-5 text-5xl text-blue-950 text-center py-8 outline outline-4 outline-gray-500'>
			{"ID:"}{props.params.id} <br />< br />
			{"Title:"}{res.title} <br /><br/>
			{"UserID:"}{res.userId} <br/>
		</h1>
     }
        </div>
    
      </div>
  
  );
  
  }

  /* {res.map((book:any)=>(<div>
       { <div>
       { "name:"}
        {book.name}</div>}
       {
    <div>{"id:"}
       {book.id }</div>}
  {
    
  }
  
    </div>
    
    ))}
         
    //  */
  