import React from "react"
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons"
import { View, Text } from "react-native"
import { DevitType } from "../../../../types"
import { styles } from "./styles"

export type FooterContainerProps = {
  devit: DevitType
}

export const Footer = ({ devit }: FooterContainerProps) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Feather name={"message-circle"} size={20} color={"gray"} />
      <Text style={styles.number}>{devit.numberOfComments}</Text>
    </View>
    <View style={styles.iconContainer}>
      <EvilIcons name={"retweet"} size={30} color={"gray"} />
      <Text style={styles.number}>{devit.numberOfRevis}</Text>
    </View>
    <View style={styles.iconContainer}>
      <AntDesign name={"hearto"} size={20} color={"gray"} />
      <Text style={styles.number}>{devit.numberOfLikes}</Text>
    </View>
    <View style={styles.iconContainer}>
      <EvilIcons name={"share-google"} size={25} color={"gray"} />
    </View>
  </View>
)
