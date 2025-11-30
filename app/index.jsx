// import { StyleSheet, Text, View, Image } from 'react-native'
// import Logo from '../assets/image.png'
// import React from 'react'
// import { Link } from 'expo-router'
// import ThemedView from '../components/ThemedView'
// import ThemedLogo from '../components/ThemedLogo'
// import Spacer from '../components/Spacer'
// import ThemedText from '../components/ThemedText'

// const Home = () => {
//     return (
//         <ThemedView style={styles.container}>
//             <ThemedLogo source={Logo} style={styles.img} />

//             <Spacer height={20} />
//             <ThemedText style={styles.title} title={true} >The number 1</ThemedText>

//             <Spacer height={10} />
//             <ThemedText style={{ marginTop: 10, marginBottom: 30, }}>Reading List app</ThemedText>
//             <Spacer />

//             <View style={styles.card}>
//                 <Text>Get started by adding books to your reading list.</Text>
//             </View>

//             <Link href={"/about"} style={{ marginTop: 20, borderBottomWidth: 1, marginVertical: 10 }}>
//                 <ThemedText> About page</ThemedText>
//             </Link>
//             <Link href={"/contact"} style={{ marginTop: 20, borderBottomWidth: 1, marginVertical: 10 }}>
//                 <ThemedText>Contact page</ThemedText>
//             </Link>
//         </ThemedView>


//     )
// }

// export default Home

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     img: {
//         width: 100,
//         height: 100,
//         marginVertical: 20,
//     },
//     card: {
//         backgroundColor: '#eee',
//         padding: 20,
//         borderRadius: 5,
//         boxShadow: '4px 4px rgba(0,0,0,0.1)',
//     }

// })

import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/image.png'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            {/* ১. Syntax Error ফিক্স করা হয়েছে: <ThemedLogo> ট্যাগ ব্যবহার করা হয়েছে */}
            <ThemedLogo source={Logo} style={styles.img} /> 

            <Spacer height={20} />
            <ThemedText style={styles.title} title={true} >The number 1</ThemedText>

            <Spacer height={10} />
            <ThemedText style={{ marginTop: 10, marginBottom: 30, }}>Reading List app</ThemedText>
            <Spacer />

            <View style={styles.card}>
                <Text>Get started by adding books to your reading list.</Text>
            </View>

            <Link href={"/about"} style={{ marginTop: 20, borderBottomWidth: 1, marginVertical: 10 }}>
                <ThemedText> About page</ThemedText>
            </Link>
            <Link href={"/contact"} style={{ marginTop: 20, borderBottomWidth: 1, marginVertical: 10 }}>
                <ThemedText>Contact page</ThemedText>
            </Link>



            <Link href={"/login"} style={{ marginTop: 20, borderBottomWidth: 1, marginVertical: 10 }}>
                <ThemedText> Login page</ThemedText>
            </Link>
            <Link href={"/register"} style={{ marginTop: 20, borderBottomWidth: 1, marginVertical: 10 }}>
                <ThemedText>Register page</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Home

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
    img: {
        width: 100,
        height: 100,
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        // ২. boxShadow ফিক্স করা হয়েছে: React Native এর শ্যাডো প্রোপার্টি ব্যবহার করা হয়েছে
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Android এর জন্য
    }
})