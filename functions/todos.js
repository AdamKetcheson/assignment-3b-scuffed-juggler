export  async function  handler (event, content){

    return {
         statusCode:200,
         body: JSON.stringify({path:"/api/todos"})
    }

}