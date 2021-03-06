export type RootStackParamList = {
  Root: undefined
  FormDevit: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Home: undefined
  Search: undefined
  Notifications: undefined
  Messages: undefined
}

export type HomeNavigatorParamList = {
  HomeScreen: undefined
}

export type TabTwoParamList = {
  TabTwoScreen: undefined
}

export type UserType = {
  id: string
  name: string
  username: string
  image?: string
}

export type DevitType = {
  id: string
  createdAt: string
  user: UserType
  content: string
  image?: string
  numberOfComments?: number
  numberOfRevis?: number
  numberOfLikes?: number
}
