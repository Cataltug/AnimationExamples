import { View, Text, Button } from 'react-native'
import React from 'react'
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated"
import SafeScreen from '../../SafeScreen'

const index = () => {
    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() =>{
        return {
            transform: [{translateX: offset.value}, {
                scale: offset.value / 100,
            }]
        };
    });

    const handleSlideLeft = () => {
        offset.value = withTiming(-100, {
            duration: 250,
        });};
    const handleSlideRight = () => {
        offset.value = withTiming(100, {
            duration: 250,
        });
    };


  return (
    <SafeScreen>
        <View style={{alignItems: "center"}}>
            <Animated.View style = {[{ width: 150, height: 150, backgroundColor: "dodgerblue" }, animatedStyles]}
            />
            <Button title ="Slide Left" onPress = {handleSlideLeft}/>
            <Button title ="Slide Right" onPress = {handleSlideRight}/>
        </View>
    </SafeScreen>
  )
}

export default index