import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://tor.appdevelopers.mobi/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        
        router.push({
          pathname: "/home",
          params: { name },
        });
      } else {
        
        console.error("Sign-up failed:", data);
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          resizeMode="contain"
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Hi! Welcome back, you have been missed
        </Text>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Image
            resizeMode="contain"
            source={require("../assets/images/mail.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="xyz@gmail.com"
            placeholderTextColor="rgba(128, 128, 128, 1)"
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Image
            resizeMode="contain"
            source={require("../assets/images/lock.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="password"
            placeholderTextColor="rgba(128, 128, 128, 1)"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/Eye.png")}
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.footer}>
         
          <Image
            source={require("../assets/images/left_bottom_splash.png")}
            style={styles.image}
          />

        
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require("../assets/images/google.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require("../assets/images/apple.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>

       
          <View style={styles.textContainer}>
            <Text style={styles.normalText}>
              Don't have an account?
              <Link href="/signup" style={styles.signUpText}>
                Sign Up
              </Link>
            </Text>

            <Text style={styles.termsText}>
              <Text>
                By login or sign up, you agree to our terms of use and privacy
                policy
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 32,
    padding: 24,

    width: "100%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  time: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 22,
  },
  logo: {
    alignSelf: "center",
    width: 233,
    height: 170,
    marginBottom: 18,
  },
  title: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Bold",
    fontSize: 32,
    marginBottom: 8,
  },
  subtitle: {
    color: "rgba(128, 128, 128, 1)",
    fontFamily: "Medium",
    fontSize: 16,
    marginBottom: 24,
  },
  label: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Bold",
    fontSize: 14,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(128, 128, 128, 1)",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontFamily: "Inter-Regular",
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
    paddingVertical: 16,
  },
  visibilityIcon: {
    width: 15,
    height: 12,
  },
  forgotPassword: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Bold",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "rgba(163, 207, 255, 1)",
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "rgba(9, 42, 77, 1)",
    fontFamily: "Bold",
    fontSize: 24,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 46,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(163, 207, 255, 1)",
  },
  dividerText: {
    color: "rgba(102, 97, 97, 1)",

    fontSize: 15,
    marginHorizontal: 10,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    position: "absolute",
    left: 0,
    bottom: 0,
    opacity: 0.6,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    marginVertical: 10,
    marginTop: -120,
  },

  iconImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  normalText: {
    fontSize: 14,
    color: "#333",
  },
  signUpText: {
    fontWeight: "bold",
    fontFamily: "Black",
  },
  termsText: {
    marginTop: 10,
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
});
