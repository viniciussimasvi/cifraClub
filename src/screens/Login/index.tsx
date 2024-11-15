import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import background from "../../assets/fundoCifra.jpg";
import logo from "../../assets/logo.png";
import { ButtonMain } from "../../components/ButtonMain";
import { ButtonSocial } from "../../components/ButtonSocial";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={background}
        >
          <Image source={logo} resizeMode="contain" />

          <View style={styles.boxForms}>
            <TextInputField
              placeHolder="exemplo@exemplo.com.br"
              valueInput={email}
              handleFunctionInput={handleEmail}
            />

            <TextInputField
              placeHolder="senha"
              typeInput={true}
              valueInput={password}
              handleFunctionInput={handlePassword}
            />

            <ButtonMain
              title="Entrar"
              handleFunction={handleLogin}
              propsBackgroundColor="#F46500"
            />

            <TouchableOpacity>
              <Text style={styles.textEsqueciSenha}> ESQUECI MINHA SENHA</Text>
            </TouchableOpacity>

            <View style={styles.linha} />

            <ButtonSocial
              title="Entrar com o Facebook"
              propsBackgroundColor="#425F9D"
              icon="logo-facebook"
              propsType="ionicon"
            />

            <ButtonSocial
              title="Entrar com o google"
              propsBackgroundColor="#b9b9b9"
              icon="logo-google"
              propsType="ionicon"
            />

            <ButtonSocial
              title="Iniciar sessão com a Apple"
              propsBackgroundColor="#000"
              icon="logo-apple"
              propsType="ionicon"
            />

            <View style={styles.cadastro}>
              <Text>Não tem conta?</Text>
              <Text style={{ color: "#F46500", fontWeight: "bold", marginLeft: 5}}>
                Cadastre-se
              </Text>
            </View>
          </View>

          <Text style={styles.termos}>
            Li e concordo com os Termos de Uso e a Politica de Privacidade
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
