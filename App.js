import { SafeAreaView, ScrollView } from "react-native";

import Categories from "./src/Categories";
import HorizontalDivider from "./src/components/HorizontalDivider";
import Spotlight from "./src/Spotlight";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Categories />
        <HorizontalDivider />
        <Spotlight />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
