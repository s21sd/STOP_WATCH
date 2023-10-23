import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Screens = () => {
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');
    const [ampm, setAmpm] = useState('AM');
    useEffect(() => {
        getHour();
        getMinute();
        getSecond();
        getAmPm();
    }, [])
    const getHour = () => {
        const date = new Date();
        const hour = date.getHours();
        setHour(hour);
        // console.log(hour);
    }
    const getMinute = () => {
        const date = new Date();
        const minute = date.getMinutes();
        minute > 9 ? setMinute(minute) : setMinute('0' + minute);
        setMinute(minute);
        // console.log(hour);
    }
    const getSecond = () => {
        const date = new Date();
        const second = date.getSeconds();
        second > 9 ? setSecond(second) : setSecond('0' + second);
    }
    const getAmPm = () => {
        const data = new Date();
        const ampm = data.getHours() >= 12 ? 'PM' : 'AM';
        setAmpm(ampm);
    }
    setInterval(() => {
        getHour();
        getMinute();
        getSecond();
    }, 1000)

    return (
        <View style={styles.container}>
            <Text style={styles.hour}>{hour}</Text>
            <Text style={styles.minute}>{minute}</Text>
            <Text style={styles.second}>{second}</Text>
            {/* <Text style={styles.ampm}>{ampm}</Text> */}

            <View style={styles.bottomnav}>
                <TouchableOpacity>
                    <View style={styles.bottomnavtext}>
                        <AntDesign name="clockcircle" size={30} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
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
        fontSize: 180,
        fontWeight: 'bold',
    },
    minute: {
        color: 'white',
        fontSize: 160,
        fontWeight: 'bold',
        height: 180,

    },
    second: {
        color: 'white',
        fontSize: 160,
        fontWeight: 'bold',
        height: 180,


    }, ampm: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        // height: 180,
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




});


export default Screens
