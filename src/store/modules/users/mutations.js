export const mutations ={

    setUser(state, username) {
        state.username = username;
      },
      setToken(state, token) {
        state.token = token;
        console.log("token",token)
        console.log("state-token",state.token)

      },

}