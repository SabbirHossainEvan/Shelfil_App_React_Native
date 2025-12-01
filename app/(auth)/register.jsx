import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'

const Register = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register For an Account
            </ThemedText>

            {/* <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed]} >
                <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Register</Text>
            </Pressable> */}

            <Pressable style={({ pressed }) =>[styles.btn, pressed && styles.pressed] } >
                <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Register</Text>
            </Pressable>

            <Spacer />
            <Link href={'/login'}>
                <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Register

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
    
})