import {
  Text,
  View,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../config/firebase";
import React, { useState, useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
