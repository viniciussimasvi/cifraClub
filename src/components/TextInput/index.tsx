import { TextInput } from "react-native";
import { styles } from "./style";

interface PropsInteput {
  placeHolder: string;
  typeInput?: boolean;
  valueInput: string;
  handleFunctionInput: (value: string) => void;
}

export const TextInputField = ({
  placeHolder,
  typeInput,
  valueInput,
  handleFunctionInput,
}: PropsInteput) => {
  return (
    <TextInput
      onChangeText={handleFunctionInput}
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#aca9a9"
      secureTextEntry={typeInput}
      value={valueInput}
    />
  );
};
