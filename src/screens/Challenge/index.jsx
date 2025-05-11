import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, Easing } from 'react-native-reanimated';

const {height: windowHeight } = Dimensions.get("window");
const BALL_SIZE = 150;

const FLOOR_Y = windowHeight * 0.8 - BALL_SIZE;
const BOUNCE_HEIGHT1 = FLOOR_Y * 0.5;
const BOUNCE_HEIGHT2 = FLOOR_Y * 0.25;

const index = () => {
    const translateY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }]
      }));

      useEffect(() => {

        translateY.value = withSequence(
          withTiming(FLOOR_Y, {
            duration: 800,
            easing: Easing.in(Easing.quad)
          }),

          withTiming(FLOOR_Y - BOUNCE_HEIGHT1, {
            duration: 400,
            easing: Easing.out(Easing.quad)
          }),

          withTiming(FLOOR_Y, {
            duration: 400,
            easing: Easing.in(Easing.quad)
          }),

          withTiming(FLOOR_Y - BOUNCE_HEIGHT2, {
            duration: 300,
            easing: Easing.out(Easing.quad)
          }),

          withTiming(FLOOR_Y, {
            duration: 300,
            easing: Easing.in(Easing.quad)
          })
        );
      }, []);


      return (
        <Animated.View style={[styles.ball, animatedStyle]} />
      );
    }
    
    const styles = StyleSheet.create({
      ball: {
        width: BALL_SIZE,
        height: BALL_SIZE,
        borderRadius: 100,
        backgroundColor: 'tomato',
        alignSelf: 'center'
      }
    });

export default index