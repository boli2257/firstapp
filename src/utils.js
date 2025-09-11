export const randNr=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

import axios from "axios"

const baseUrl =  "http://localhost:8000/"
// összes adat lekérése
export const getTodos=async (setTodos)=>{
    const res = await axios.get(baseUrl+"data")
    setTodos(res.data)
}
//todo törlés
export const deleteTodo = async (id) =>{
    await axios.delete(`${baseUrl}data/${id}`)
} 
//todo hozzáadás
export const addTodo = async (desc) =>{
    await axios.post(baseUrl + "data/",{desc})
}
//todo kész
export const completedTodo = async (id) =>{
    await axios.patch(`${baseUrl}data/${id}`)
}
//todo összes töröl
export const deleteAll = async () =>{
    await axios.delete(`${baseUrl}data`)

}