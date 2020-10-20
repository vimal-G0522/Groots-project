
const API='http://localhost:5000/'

export const create=(values)=>{
    return fetch(`${API}`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
  
    body:JSON.stringify(values)
    
    },).then(res=>{
  
        return res.json()
    }).catch(err=>console.log(err))
  }