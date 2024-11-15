import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  boxCard: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 8,
    flexDirection: "row",
  },

  boxInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  id: {
    fontSize: 16,
    color: "#999",
    marginLeft: 15,
    marginBottom: 23,
  },

  titulo: {
    fontSize: 16,
    marginTop: 1,
  },

  artista: {
    color: "#999",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderBottomLeftRadius: 20,
  },

  nomeArtista: {
    marginLeft: 15,
  },

  boxVerificado: {
    flexDirection: "row",
  },

  iconVerificado: {
    marginLeft: 10,
  },
});
