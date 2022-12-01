/* 
      Make a connection between client ---- server (NETLIFY cloud function)
      fetch(url)

      PATH TO ALL OF YOUR FUNCTIONS
      DOCS for any service tell how access the function cloud function
      from the client(web browser) (firebase IOS/ANDROID/WEB/UNITY)
      /.netlify/functions/fn(name)
      /.netilfy/functions/todos  path   route     function    todos.js
*/

async function getToDos(){
    const url = '/.netlify/functions/todos'
    const res = await fetch(url)
    const data = await res.json()
  
    document.querySelector('p').textContent = data.path
    
}

getToDos()