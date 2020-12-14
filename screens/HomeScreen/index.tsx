import * as React from "react"
import { StyleSheet } from "react-native"
import { Feed } from "../../components"

import { View } from "../../components/Themed"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
