import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";

export const Tabs = () => {
  return (
    <View style={styles.tabContainer}>
      <View>
        <TouchableOpacity>
          <Icon name="home-outline" type="ionicon" color={"#cdcbcb"} />
          <Text style={styles.text}>Inicio</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Icon name="list-outline" type="ionicon" color={"#cdcbcb"} />
          <Text style={styles.text}>Listas</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Icon name="search-outline" type="ionicon" color={"#cdcbcb"} />
          <Text style={styles.text}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Icon name="school-outline" type="ionicon" color={"#cdcbcb"} />
          <Text style={styles.text}>Academy</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal" type="ionicon" color={"#cdcbcb"} />
          <Text style={styles.text}>Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
