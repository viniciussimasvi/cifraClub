import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',   
    alignItems: "center",
    justifyContent: "center",
  },

  background:{
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },

  boxForms:{
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
    paddingTop: 30,
  },

  linha:{
    backgroundColor: "#00000030",
    width: "100%",
    height: 1,
  },

  textEsqueciSenha:{
    color: "#F46500",
    fontWeight: "bold",
    padding: 10
  },

  cadastro:{
   width: "100%",
   alignItems: "center",
   justifyContent: "center",
   flexDirection: "row"

  },

  termos:{
    color: "#fff",
    marginTop: 30,
  }

});
