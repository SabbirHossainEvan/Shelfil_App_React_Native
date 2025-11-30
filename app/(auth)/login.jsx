import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

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


    <Pressable 
    onPress={handleSubmit}
    style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
        <Text style={{ color: '#f2f2f2'}} >Login</Text>
    </Pressable>


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