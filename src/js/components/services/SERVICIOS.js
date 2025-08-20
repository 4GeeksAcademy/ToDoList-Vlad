
const urlbase = "https://playground.4geeks.com/todo/"


export const getUsers = async () => {
    try {
        
        const response = await fetch(`${urlbase}users`);
        if (!response.ok) {
           throw new Error("Error al obtener los datos");
           
            } 
        const data = await response.json();
console.log(data)


        return data;
    } catch (error) {
        console.log(error)
    }
 };

 