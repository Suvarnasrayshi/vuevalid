export const actions= {
async login({commit},{username,password}){
  try{
      const response=await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({username,password}),
      });
      if(response.ok){
        console.log("login successful");
      }else{
        console.log("error in login!!!!");
      }
      const login=await response.json();
      commit('setUser',login.username)
  }
  catch(error){
    console.error("error",error)
  }
}
}