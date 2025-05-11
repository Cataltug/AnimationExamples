import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withSequence, withTiming, interpolate, interpolateColor, Easing } from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BOX_SIZE = SCREEN_WIDTH * 0.4;

const index = () => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1, 2, 3],
      [1, 1.5, 0.75, 1]
    );


    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1, 2, 3],
      ["seagreen", "dodgerblue", "tomato", "seagreen"]
    );

    return {
      transform: [{ scale }],
      backgroundColor,
    };
  });

  useEffect(() => {
    progress.value = withSequence(
      withTiming(1, {
        duration: 600,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      }),
      withTiming(2, {
        duration: 600,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      }),
      withTiming(3, {
        duration: 600,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      })
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 8,
  },
});

export default index;