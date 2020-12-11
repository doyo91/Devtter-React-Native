import * as React from "react"
import { StyleSheet } from "react-native"
import { Devit } from "../../components"

import { Text, View } from "../../components/Themed"

import devits from "../../data/devits"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Devit devit={devits[0]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
