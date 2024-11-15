import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";

interface PropsButton {
  title: string;
  propsBackgroundColor: string;
  icon: string;
  propsType?: string;
}

export const ButtonSocial = ({
  title,
  propsBackgroundColor,
  icon,
  propsType,
}: PropsButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      style={[
        styles.styleButton,
        {
          backgroundColor: propsBackgroundColor ? propsBackgroundColor : "Blue",
        },
      ]}
    >
      <View style={styles.styleButtonSocial}>
        <Icon name={icon} type={propsType} color="#fff" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
