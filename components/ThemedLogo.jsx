import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

import DarkLogo from '../assets/image2.png'
import LightLogo from '../assets/image.png'

const ThemedLogo = ({ ...props }) => {

    const colorScheme = useColorScheme() 

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})