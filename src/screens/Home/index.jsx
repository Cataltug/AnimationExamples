import { View, Text, Button, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import SafeScreen from '../../SafeScreen'
import navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';

const index = () => {
    const navigation = useNavigation();

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleShow = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };
    const handleHide = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

  return (
    <SafeScreen>
        <Button title='to Reanimated' onPress={() => navigation.navigate("Reanimated")}/>
        <Button title='to Challenge' onPress={() => navigation.navigate("Challenge")}/>
        <Animated.View
        style = {{
            opacity: fadeAnim,
            width: 150,
            height: 150,
            backgroundColor: "dodgerblue"}}/>
        <Button title = "Show" onPress={handleShow}/>
        <Button title = "Hide" onPress={handleHide}/>
    </SafeScreen>
  )
}

export default index