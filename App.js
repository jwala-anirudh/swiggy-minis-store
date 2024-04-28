import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const App = () => {
  const categories = [
    {
      id: 1,
      label: "Personal Care",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/02/43/86/00/1000_F_243860036_EtAnheeRMeqX9SEHhdzD5ZaWltikqLAu.jpg",
    },
    {
      id: 2,
      label: "Electronics",
      imageUrl: "https://i.ebayimg.com/images/g/fwYAAOSwIhFf1TnN/s-l1600.jpg",
    },
    {
      id: 3,
      label: "Home & Decor",
      imageUrl:
        "https://www.jiomart.com/images/product/original/rvsibjnjuo/glass-square-cube-4x4-glass-vase-for-home-decor-1-product-images-orvsibjnjuo-p594344305-2-202210081138.jpg",
    },
    {
      id: 4,
      label: "Goumet & Organic",
      imageUrl:
        "https://5.imimg.com/data5/AX/TP/VD/ANDROID-79380320/product-jpeg-500x500.jpg",
    },
    {
      id: 5,
      label: "Snacks & Beverages",
      imageUrl:
        "https://www.thebossykitchen.com/wp-content/uploads/2021/05/Homemade-French-Fries-square-photo-e1691795494332.jpg",
    },
    {
      id: 6,
      label: "Pet Care",
      imageUrl:
        "https://storage.googleapis.com/kms-au.appspot.com/sites/austin/assets/73107f1d-8a24-4b84-a7e5-e3f235d8dbac/pets-square.jpg",
    },
    {
      id: 7,
      label: "Jewellery",
      imageUrl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw111b2bb3/images/hi-res/504012SFDABA28_1.jpg",
    },
    {
      id: 8,
      label: "Others",
      imageUrl:
        "https://i.pinimg.com/736x/22/4f/30/224f300cbb4de7c75ac5a22d60854497.jpg",
    },
    {
      id: 9,
      label: "Apparel",
      imageUrl:
        "https://png.pngtree.com/thumb_back/fh260/background/20220610/pngtree-women-s-clothing-hanging-on-a-rail-apparel-display-hanger-photo-image_31300348.jpg",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Browse by category</Text>
        <View style={styles.categories}>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryCard}>
              <Image src={category.imageUrl} style={styles.image} />
              <Text style={styles.label}>{category.label}</Text>
            </View>
          ))}
        </View>

        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 18,
    marginBottom: 12,

    textAlign: "left",
    fontWeight: "800",
  },
  categories: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  categoryCard: {
    marginBottom: 12,
    marginHorizontal: 5,
  },
  image: {
    width: 80,
    height: 80,

    marginBottom: 4,
    borderRadius: 16,
  },
  label: {
    fontSize: 12,

    maxWidth: 75,
    color: "#454545",
    textAlign: "center",
  },
});
