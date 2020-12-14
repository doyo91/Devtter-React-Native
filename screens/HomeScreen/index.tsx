import * as React from "react"
import { StyleSheet } from "react-native"
import { Feed, NewDevitButton } from "../../components"

import { View } from "../../components/Themed"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewDevitButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
