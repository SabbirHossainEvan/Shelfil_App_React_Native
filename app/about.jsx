import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const about = () => {
      const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={[styles.container, {backgroundColor: theme.background}   ]}>
      <ThemedText style={styles.title}>About Page</ThemedText>

      <Link href={"/"} style={{marginTop: 20, borderBottomWidth: 1, marginVertical: 10}}>
        <ThemedText>Go back to Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default about

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})