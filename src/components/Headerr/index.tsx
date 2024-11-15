import {Image, Text, View } from "react-native";
import { styles } from "./style";
import { TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png"


export const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={logo} style={{width: 100, height: 40}}/>
        {/* <Text>Cifra Club</Text> */}
        <View style={styles.button}>

          <View style={styles.sejaPro}>
            <TouchableOpacity style={styles.buttonSejaPro}>
                 <Text style={styles.textSejaPro}>Seja PRO</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity>
          <Text style={styles.buttonEntrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
