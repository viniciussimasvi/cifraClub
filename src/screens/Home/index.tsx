import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "../../components/Card";
import { Generos } from "../../components/Generos";
import { Header } from "../../components/Headerr";
import { Tabs } from "../../components/Tabs";
import { TopCifras } from "../../components/TopCifras";
import { CardAPI } from "../../Mock/DataCard";
import { GenerosAPI } from "../../Mock/DataGeneros";
import { TopCifrasAPI } from "../../Mock/DataTopCifras";
import { styles } from "./style";

export const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={GenerosAPI}
            keyExtractor={(dados) => dados.id.toString()}
            renderItem={({ item }) => <Generos genero={item.genero} />}
          />
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={CardAPI}
            keyExtractor={(dados) => dados.id.toString()}
            renderItem={({ item }) => <Card image={item.image} />}
          />
        </View>

        <View style={styles.topCifras}>
          <Text style={styles.textTopCifras}>Top Cifras</Text>
        </View>

        <FlatList
          data={TopCifrasAPI}
          keyExtractor={(dados) => dados.id.toString()}
          renderItem={({ item }) => (
            <TopCifras
              image={item.image}
              artista={item.artista}
              titulo={item.titulo}
              id={item.id}
            />
          )}
        />

        <View style={styles.maisCifras}>
          <TouchableOpacity>
            <Text style={styles.textMaisCifras}>Ver mais cifras</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Tabs />
    </>
  );
};
