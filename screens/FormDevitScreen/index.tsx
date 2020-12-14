import React, { useState } from "react"
import { AntDesign } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"

import { View, Text } from "../../components/Themed"
import Colors from "../../constants/Colors"
import { ProfilePicture } from "../../components"

import { useNavigation } from "@react-navigation/native"

export default function FormDevitScreen() {
  const [devit, setDevit] = useState("")
  const [imageURL, setImageURL] = useState("")

  const navigation = useNavigation()

  const onSubmitDevit = () => {
    console.log(`Posting the devit: ${devit}`)
    console.log(`Posting the imageURL: ${imageURL}`)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign
          name="close"
          size={30}
          color={Colors.light.tint}
          onPress={() => navigation.navigate("Home")}
        />
        <TouchableOpacity style={styles.button} onPress={onSubmitDevit}>
          <Text style={styles.buttonText}>Devit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <ProfilePicture
          image={
            "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1550569572/imjp7dcb62qua8ja52hl.png"
          }
        />
        <View style={styles.inputsContainer}>
          <TextInput
            value={devit}
            onChangeText={setDevit}
            multiline={true}
            numberOfLines={3}
            style={styles.devitInput}
            placeholder={"What's happening?"}
          />
          <TextInput
            value={imageURL}
            onChangeText={setImageURL}
            style={styles.imageInput}
            placeholder={"Image url (optional)"}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingTop: 10,
  },
  headerContainer: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  formContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 15,
    flex: 1,
    alignItems: "flex-start",
  },

  devitInput: {
    fontSize: 20,
  },
  imageInput: {},
})
