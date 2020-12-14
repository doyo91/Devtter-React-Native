import React from "react"
import { Image } from "react-native"

export type ProfilePictureProps = {
  image?: string
  size?: number
}

export function ProfilePicture({ image, size = 50 }: ProfilePictureProps) {
  const imageProfile = image
    ? image
    : "https://i0.wp.com/www.techcult.com.br/wp-content/uploads/2017/03/perfil-twitter.png?resize=1024%2C1024&ssl=1"
  console.log(imageProfile)
  return (
    <Image
      source={{ uri: imageProfile }}
      style={{
        width: size,
        height: size,
        borderRadius: size,
      }}
    />
  )
}
