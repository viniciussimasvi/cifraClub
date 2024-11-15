import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";

interface PropsTopCifras {
  image: ImageSourcePropType;
  titulo: string;
  artista: string;
  id: number;
}

export const TopCifras = ({ image, artista, id, titulo }: PropsTopCifras) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.boxCard}>
            <Image style={styles.avatar} source={image} />
            <View style={styles.boxInfo}>
              <Text style={styles.id}>{id}</Text>
              <View style={styles.nomeArtista}>
                <View style={styles.boxVerificado}>
                  <Text style={styles.titulo}>{titulo}</Text>
                  <Icon
                    style={styles.iconVerificado}
                    name="verified"
                    type="octicons"
                    size={20}
                    color={"#3279d0"}
                  />
                </View>
                <Text style={styles.artista}>{artista}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
