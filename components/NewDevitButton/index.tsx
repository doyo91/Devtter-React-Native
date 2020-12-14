import React from "react"
import { TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { styles } from "./styles"

export const NewDevitButton = () => {
  const onPress = () => {
    console.warn("Open New Devit")
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
