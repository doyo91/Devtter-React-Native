import React from "react"
import { View, FlatList } from "react-native"
import devits from "../../data/devits"
import { Devit } from "../Devit"

export const Feed = () => (
  <FlatList
    data={devits}
    renderItem={({ item }) => <Devit devit={item} />}
    keyExtractor={(item) => item.id}
  ></FlatList>
)
