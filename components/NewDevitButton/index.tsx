import React from "react"
import { TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"

export const NewDevitButton = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate("FormDevit")
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <MaterialCommunityIcons name="feather" size={24} color="white" />
    </TouchableOpacity>
  )
}
