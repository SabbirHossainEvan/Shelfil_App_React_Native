import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

    const handleSubmit = () => {
        // Handle login logic here
        console.log("Login button pressed");
    }

  return (
    <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
            Login to your Account
        </ThemedText>


        <ThemedButton onPress={handleSubmit} style={styles.btn}></ThemedButton>


        <Spacer height={100} />
        <Link href={'/register'}>
            <ThemedText style={{ textAlign: 'center' }}>Register instead</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    }, 
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    },   
})