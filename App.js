import { SafeAreaView, StatusBar, View } from "react-native";
import Cesta from "./src/telas/Cestas";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const [fonteCarregada] = useFonts({
  MontserratRegular: Montserrat_400Regular,
  MontserratBold: Montserrat_700Bold,
});

if (!fonteCarregada) {
   <View />;
}

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
