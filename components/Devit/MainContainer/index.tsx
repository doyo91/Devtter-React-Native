import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { View, Text, Image } from "react-native"
import { DevitType } from "../../../types"
import { Footer } from "./Footer"
import { styles } from "./styles"
import moment from "moment"

export type MainContainerProps = {
  devit: DevitType
}

export const MainContainer = ({ devit }: MainContainerProps) => (
  <View style={styles.mainContainer}>
    <View style={styles.headerContainer}>
      <View style={styles.headerInfo}>
        <Text style={styles.name}>{devit.user.name}</Text>
        <Text style={styles.username}>@{devit.user.username}</Text>
        <Text style={styles.createdAt}>
          · {moment(devit.createdAt).fromNow(true)}
        </Text>
      </View>
      <View>
        <Ionicons name={"chevron-down"} size={16} color={"gray"} />
      </View>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.content}>{devit.content}</Text>
      {!!devit.image && (
        <Image source={{ uri: devit.image }} style={styles.image} />
      )}
    </View>
    <Footer devit={devit} />
  </View>
)
