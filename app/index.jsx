import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Welcome() {
  const [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Black: require("../assets/fonts/Poppins-Black.ttf"),
    EBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    Light: require("../assets/fonts/Poppins-Light.ttf"),
    MediumItalic: require("../assets/fonts/Poppins-MediumItalic.ttf"),
  });

  const router = useRouter();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Animation references
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const splashOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(splashOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();

      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Splash Images */}
      <Animated.Image
        source={require("../assets/images/left_top_splash.png")}
        style={[styles.leftTopSplash, { opacity: splashOpacity }]}
      />
      <Animated.Image
        source={require("../assets/images/right_top_splash.png")}
        style={[styles.rightTopSplash, { opacity: splashOpacity }]}
      />
      <Animated.Image
        source={require("../assets/images/right_bottom_splash.png")}
        style={[styles.rightBottomSplash, { opacity: splashOpacity }]}
      />

      {/* Logo */}
      <Animated.Image
        source={require("../assets/images/logo.png")}
        style={[styles.logo, { opacity: logoOpacity }]}
      />

      {/* Text */}
      <Animated.View style={[{ opacity: textOpacity }, styles.textContainer]}>
        <Text style={styles.subtitle}>Sparkle & Shine Transform</Text>
        <Text style={styles.subtitle}>Your drive With Every Wash!</Text>
      </Animated.View>

      {/* Button */}
      <Animated.View
        style={[{ opacity: buttonOpacity }, styles.buttonContainer]}
      >
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.startButtonText}>Let's Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.signUpText}>
            Already have an account?
            <Text style={{ color: "#000000", fontFamily: "Bold" }}>
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: "80%",
    height: "29%",
    position: "absolute",
    top: "30%",
  },
  leftTopSplash: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 150,
    height: 150,
  },
  rightTopSplash: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 120,
    height: 130,
  },
  rightBottomSplash: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center",
    top: "20%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    fontFamily: "Medium",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    top: "20%",
    width: "100%",
  },
  startButton: {
    backgroundColor: "#A3CFFF",
    padding: 10,
    borderRadius: 30,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 380,
    height: 61,
  },
  startButtonText: {
    color: "#092A4D",
    fontSize: 22,
    fontFamily: "Bold",
    alignItems: "center",
  },
  signUpText: {
    color: "#696969",
    textAlign: "center",
    fontSize: 13,
  },
});
