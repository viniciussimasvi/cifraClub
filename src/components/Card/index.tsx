import { Image, ImageSourcePropType, View } from "react-native";
import { styles } from "./style";

interface propsCard {
  image: ImageSourcePropType;
}

export const Card = ({ image }: propsCard) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={image} style={styles.image} alt="Imagens de cantores" />
      </View>
    </View>
  );
};
