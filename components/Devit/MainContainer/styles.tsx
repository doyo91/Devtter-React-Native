import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  contentContainer: {},
  footerContainer: {},
  headerInfo: {
    flexDirection: "row",
  },
  name: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  username: {
    marginLeft: 5,
    color: "gray",
  },
  createdAt: {
    marginLeft: 5,
    color: "gray",
  },
  content: {
    marginLeft: 5,
    marginTop: 5,
    lineHeight: 18,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 10,
  },
})
