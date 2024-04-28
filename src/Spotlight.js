import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Spotlight = () => {
  const starSellers = [
    {
      id: 1,
      storeName: "Nova Nova",
      category: "Gourment & Organic",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/15a69d45-f7b9-4583-8f1d-d45f1767a78d/logo",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/dfe31777-838d-4182-8d7b-7a5a59bfcdea/Nova-Nova-Latest-Images-254-1.jpg",
      title: "OPEN UP THE NEW",
      description: "Journey to your new favourite food ends here",
    },
    {
      id: 2,
      storeName: "Kai by mangi",
      category: "Personal Care, Beauty",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/ecce4782-b0a4-49d2-8727-00dd7493edf1/aNEQc86kqa30kh-JBC7Xf",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/1995f13a-83fe-4857-a036-aafd9f1ccfe7/RseRBIDT2f8r6IflLywJd",
      title: "GLOSS UP",
      description: "Where skincare meets makeup",
    },
    {
      id: 3,
      storeName: "Snacks & More by Nidhi",
      category: "Regional Food, Snacks and Beverages",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/0bc5c0a3-244b-466b-ac97-9a3a6aef26ab/2eVxd9Pt8rq8UmGfyoamS",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/db2f59b3-4c8b-4b96-a60d-8e9129581f40/N-Ey-lje0ika0hY5aMZGu",
      title: "REGIONAL FLAVOURS",
      description: "Wide range of snacks & sweets",
    },
    {
      id: 4,
      storeName: "Meraki Designs",
      category: "Stationery, Gifts, Home and Decor",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/8ddd341d-b5ac-43ee-9da5-378fc4273b79/eF6FnACHtoe87FsVzt14F",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/3d8a433d-617b-4e53-9761-7db587c51048/saSPvyG2SkLnS7T-6NFIx",
      title: "LIGHT UP YOUR DAY",
      description: "Handcrafted especially for you",
    },
    {
      id: 5,
      storeName: "Sindhi Dry Fruits",
      category: "Snacks and Beverages, Gourmet & Organic, Grocery",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/49929562-3d58-4d37-a103-ab633d4df80a/TSlKq-C8-Zx9iYpGyUNv4",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/1e7e5847-a363-4801-a6d6-01e1c28cdc28/3RGWl-SyI45-xxwygEQmC",
      title: "SERVING SINCE 1939",
      description: "Buy premium dry fruits for healthy celebrations",
    },
    {
      id: 6,
      storeName: "ARKAYE JEWELS",
      category: "Jewellery",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/1758b79f-3692-4846-b24b-68e7199d35a0/WKmtrQXCYLSUlXDYaENMS",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/5c3f0eed-4540-465f-a5d6-b22d74346634/3ZNLFCeBkPRdX4V3pWLJ-",
      title: "SHINE IN SILVER",
      description: "Your style, your story",
    },
    {
      id: 7,
      storeName: "Bagum Victoria Cheese",
      category: "Gourment & Organic, Premium Cheese",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/5b9500d0-1475-412d-bca9-e9f625c9acee/logo",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/df8febde-da03-42da-a790-3505953423f6/guXazf-Wp0pck5FGqYzdC",
      title: "ARTISANAL CHEESE",
      description: "100% vegetarian with no chemical preservatives",
    },
    {
      id: 8,
      storeName: "The Doggy Bakery",
      category: "Pet Care, Bakery",
      logoImgUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/h_256,c_fit,fl_lossy,q_auto:eco,f_auto/IMAGE/865d1025-6ee0-4d42-bd77-09b223edc439/-7KMf6HYBm68CLz5DvmKD",
      logoBackgroundImageUrl:
        "https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_512,h_512,c_fit,fl_lossy,q_auto:good,f_auto/IMAGE/8a05a309-4333-4e9d-a26a-b5f565f88b16/RGHiTgEdm746R4oEoC9PP",
      title: "MADE WITH LOVE",
      description: "The bakery for dogs",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>In the Spotlight</Text>
        <Text style={styles.subHeading}>Minis we want you to explore</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 12 }}
      >
        {starSellers.map((store) => (
          <View key={store.id} style={styles.storeCard}>
            <ImageBackground
              source={{ uri: store.logoBackgroundImageUrl }}
              resizeMode='cover'
              style={{ flex: 1 }}
              imageStyle={{ borderRadius: 16 }}
            >
              <View style={{ flex: 1, justifyContent: "space-between" }}>
                <LinearGradient
                  colors={["rgba(0, 0, 0, 0.6)", "transparent"]}
                  style={{
                    padding: 12,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                >
                  <Text
                    style={{ letterSpacing: 3, color: "#FFFFFF", fontSize: 12 }}
                  >
                    {store.title}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "700",
                      fontSize: 16,
                      maxWidth: 250,
                    }}
                  >
                    {store.description}
                  </Text>
                </LinearGradient>
                <View style={{ margin: 12 }}>
                  <Image
                    source={{ uri: store.logoImgUrl }}
                    style={{
                      width: 65,
                      height: 65,
                      borderRadius: 12,
                    }}
                  />
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <View>
                <Text style={styles.storeName}>{store.storeName}</Text>
                <Text style={styles.storeCategory}>{store.category}</Text>
              </View>

              <Pressable
                style={{
                  backgroundColor: "#1ba672",
                  height: 40,
                  width: 120,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>
                  Shop now
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Spotlight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headerContainer: {
    marginLeft: 12,
  },
  heading: {
    fontSize: 20,
    marginBottom: 4,

    textAlign: "left",
    fontWeight: "800",
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 12,

    textAlign: "left",
  },
  storeName: {
    fontSize: 18,
    marginBottom: 4,

    textAlign: "left",
    fontWeight: "800",
  },
  storeCategory: {
    fontSize: 14,
    color: "#02060c99",
    textAlign: "left",
  },
  storeCard: {
    width: 280,
    height: 300,

    marginRight: 12,
  },
});
