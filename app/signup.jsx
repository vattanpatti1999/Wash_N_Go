import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = async () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}></View>

      <Image
        resizeMode="contain"
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        Fill in the below form and add life to your car!
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <View style={styles.inputWrapper}>
          <Image
            resizeMode="contain"
            source={require("../assets/images/user.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            accessibilityLabel="Name input"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <Image
            resizeMode="contain"
            source={require("../assets/images/mail.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="xyz@gmail.com"
            keyboardType="email-address"
            accessibilityLabel="Email input"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
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
            accessibilityLabel="Password input"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            accessibilityLabel={
              showPassword ? "Hide password" : "Show password"
            }
          >
            <Image
              resizeMode="contain"
              source={require("../assets/images/Eye.png")}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setAgreeTerms(!agreeTerms)}
          accessibilityLabel={
            agreeTerms
              ? "Uncheck agree to terms and conditions"
              : "Check agree to terms and conditions"
          }
          accessibilityRole="checkbox"
          accessibilityState={{ checked: agreeTerms }}
        >
          {agreeTerms && <View style={styles.checkboxInner} />}
        </TouchableOpacity>
        <View style={styles.termsTextContainer}>
          <Text style={styles.termsText}>Agree with </Text>
          <TouchableOpacity accessibilityRole="link">
            <Text style={[styles.termsText, styles.termsTextBold]}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={handleSignUp}
        accessibilityLabel="Sign up button"
        accessibilityRole="button"
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <Link href="/login" style={styles.signInLink}>
          Sign In
        </Link>
      </View>

      <Text style={styles.privacyText}>
        By login or sign up, you agree to our terms of use and privacy policy
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 32,
    padding: 23,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 18,
  },
  time: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    fontWeight: "700",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
  icon: {
    width: 25,
    height: 25,
  },
  logo: {
    width: 233,
    height: 170,
    marginBottom: 18,
  },
  title: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Bold",
    fontSize: 32,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.42)",
    fontFamily: "Medium",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(128, 128, 128, 1)",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "rgba(128, 128, 128, 1)",
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    fontWeight: "400",
  },
  eyeIcon: {
    width: 15,
    height: 12,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
    marginLeft: -170,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "rgba(121, 121, 121, 1)",
    borderRadius: 4,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: "rgba(121, 121, 121, 1)",
    borderRadius: 2,
  },
  termsTextContainer: {
    flexDirection: "row",
  },
  termsText: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "500",
  },
  termsTextBold: {
    fontWeight: "700",
  },
  signUpButton: {
    backgroundColor: "rgba(163, 207, 255, 1)",
    borderRadius: 32,
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
  },
  signUpButtonText: {
    color: "rgba(9, 42, 77, 1)",
    fontFamily: "Bold",
    fontSize: 24,
    fontWeight: "700",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 21,
  },
  signInText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  },
  signInLink: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    fontWeight: "700",
  },
  privacyText: {
    color: "rgba(128, 128, 128, 1)",
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
