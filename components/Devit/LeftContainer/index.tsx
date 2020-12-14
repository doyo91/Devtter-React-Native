import React from "react"
import { View, Text } from "react-native"
import { UserType } from "../../../types"
import { ProfilePicture } from "../../ProfilePicture"

export type LeftContainerProps = {
  user: UserType
}

export const LeftContainer = ({ user }: LeftContainerProps) => (
  <View>
    <ProfilePicture image={user.image} size={50} />
  </View>
)
