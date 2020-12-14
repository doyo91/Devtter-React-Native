import React from "react"
import { View, Text } from "react-native"
import { DevitType } from "../../types"
import { LeftContainer } from "./LeftContainer"
import { MainContainer } from "./MainContainer"
import { styles } from "./styles"

export type DevitProps = {
  devit: DevitType
}

export const Devit = ({ devit }: DevitProps) => (
  <View style={styles.container}>
    <LeftContainer user={devit.user} />
    <MainContainer devit={devit} />
  </View>
)
