import { StyleSheet, View } from "react-native";

const HorizontalDivider = () => {
  return <View style={styles.container} />;
};

export default HorizontalDivider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    borderBottomColor: "#b5b5b5",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
