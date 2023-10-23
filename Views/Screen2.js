import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Screen2 = ({ navigation }) => {
    const ShowPage = (page) => {
        navigation.navigate(page)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.hour}>00
                <Text style={styles.small}>HH</Text>
            </Text>
            <Text style={styles.minute}>00
                <Text style={styles.small}>MIN</Text>
            </Text>
            <Text style={styles.second}>00
                <Text style={styles.small}>SEC</Text>
            </Text>
            <View style={styles.startstop}>
                <TouchableOpacity>
                    <Text style={styles.start}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.stop}>Stop</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomnav}>
                <TouchableOpacity onPress={() => ShowPage('s1')}>
                    <View style={styles.bottomnavtext}>
                        <AntDesign name="clockcircle" size={30} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ShowPage('s2')}>
                    <View style={styles.bottomnavtext}>
                        <Ionicons name="timer" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'


    },
    hour: {
        color: 'white',
        fontSize: 140,
        fontWeight: 'bold',
    },
    minute: {
        color: 'white',
        fontSize: 140,
        fontWeight: 'bold',
        height: 180,

    },
    second: {
        color: 'white',
        fontSize: 140,
        fontWeight: 'bold',
        height: 180,
        marginBottom:20


    },
    bottomnav: {
        // backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomnavtext: {
        color: 'black',
        backgroundColor: 'white',
        marginHorizontal: 10,
        fontSize: 50,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 50,
        borderRadius: 10,
        textAlign: 'center'
    }
    , small: {
        color: 'gray',
        fontSize: 20,
    },
    startstop: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50
    },
    start: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10

    },
    stop: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10

    }




});


export default Screen2
