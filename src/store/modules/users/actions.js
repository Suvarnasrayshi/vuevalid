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
        const login=await response.json();
        commit('setUser',login.username)
        commit('setToken',login.token);    
        document.cookie = `token=${login.token};secure `;
        console.log("login successful and has been set successful");
      }else{
        console.log("error in login!!!!");
      }
  }
  catch(error){
    console.error("error",error)
  }
}}