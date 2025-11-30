import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>

      <Link href={"/"} style={{marginTop: 20, borderBottomWidth: 1, marginVertical: 10}}>
        <ThemedText>Go back to Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default contact

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