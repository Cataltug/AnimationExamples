import { Pressable, Alert, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, Easing, runOnUI} from 'react-native-reanimated';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const BALL_SIZE = 150;
const FLOOR_Y = SCREEN_HEIGHT * 0.8 - BALL_SIZE;

const index = () => {
    const translateY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }]
    }));
  
    const handlePress = (evt) => {
      const pressY = evt.nativeEvent.locationY;
      const dropDistance = FLOOR_Y - pressY;
      const maxBounces = Math.floor(SCREEN_WIDTH / BALL_SIZE);
  
      if (dropDistance <= 0 || maxBounces < 1) {
        Alert.alert("Error", "Not enough space!");
        return;
      }
  
      runOnUI(() => {
        "worklet";
        const seq = [];
  
        seq.push(
          withTiming(pressY, { duration: 0 })
        );

        seq.push(
          withTiming(FLOOR_Y, {
            duration: 500,
            easing: Easing.in(Easing.quad)
          })
        );

        for (let i = 0; i < maxBounces; i++) {
          const bounceH = dropDistance / (2 ** (i + 1));
          seq.push(
            withTiming(FLOOR_Y - bounceH, {
              duration: 300,
              easing: Easing.out(Easing.quad)
            })
          );

          seq.push(
            withTiming(FLOOR_Y, {
              duration: 300,
              easing: Easing.in(Easing.quad)
            })
          );
        }

        translateY.value = withSequence(...seq);
      })();
    };
  
    return (
      <Pressable style={styles.container} onPressIn={handlePress}>
        <Animated.View style={[styles.ball, animatedStyle]} />
      </Pressable>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    ball: {
      position: "absolute",
      top: 0,
      left: (SCREEN_WIDTH - BALL_SIZE) / 2,
      width: BALL_SIZE,
      height: BALL_SIZE,
      borderRadius: BALL_SIZE / 2,
      backgroundColor: "tomato"
    }
  });

export default index