import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  transparent: {
    backgroundColor: "transparent",
    // backgroundColor: "#1fc8db",
    // backgroundImage: linearGradient(
    //   "141deg",
    //   "#e4d700 0%",
    //   "#1fc8db 51%",
    //   "#2cb5e8 75%"
    // ),
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row"
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1
  },
  background: {
    height: 180,
    width: null,
    flex: 1
  }
});
export default styles;