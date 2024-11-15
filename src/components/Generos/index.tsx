import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface propsGenero {
  genero: string;
}

export const Generos = ({ genero }: propsGenero) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxCard}>
          <TouchableOpacity>
            <Text style={styles.text}>{genero}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
