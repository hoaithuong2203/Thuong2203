import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { bmiApi } from "../Service/Authentication";

const BmiScreen = ({ navigation }: { navigation: any }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const calculatedBmi = weight / Math.pow(height / 100, 2);
    setBmi(calculatedBmi.toFixed(2));

    let calculatedCategory = "";
    if (calculatedBmi < 18.5) calculatedCategory = "Thiếu cân";
    else if (calculatedBmi < 24.9) calculatedCategory = "Bình thường";
    else if (calculatedBmi < 29.9) calculatedCategory = "Tiền béo phì";
    else if (calculatedBmi < 34.9) calculatedCategory = "Béo phì độ I";
    else if (calculatedBmi < 39.9) calculatedCategory = "Béo phì độ II";
    else calculatedCategory = "Béo phì độ III";

    setCategory(calculatedCategory);
  };

  const handleCalculatePress = () => {
    if (height === "" || weight === "") {
      alert("Vui lòng nhập đầy đủ số liệu");
      return;
    }
    calculateBMI();
  };

  const handleSavePress = async () => {
    try {
      const registrationResponse = await bmiApi({
        height,
        weight,
      });
      const { data } = registrationResponse;
      alert("Lưu thành công");
    } catch (err: any) {
      alert("Lưu thất bại: ");
    }
  };
  const resetInputs = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setCategory("");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>Chỉ số khối cơ thể (BMI)</Text>
        <Image
          style={styles.image}
          source={require("../assets/bmi.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Chiều cao (cm)</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Cân nặng (kg)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
        />

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FDDFDF" }]}
            onPress={handleSavePress}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FCF7DE" }]}
            onPress={handleCalculatePress}
          >
            <Text style={styles.buttonText}>BMI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={resetInputs}
            style={[styles.button, { backgroundColor: "#DEFDFD" }]}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        {bmi !== "" && (
          <View style={styles.result}>
            <Text style={styles.resultLabel}>Chỉ số BMI</Text>
            <Text style={styles.resultValue}>{bmi}</Text>
            <Text style={styles.resultCategory}>{category}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#DEF3FD",
    paddingVertical: 16,
  },
  header: { alignItems: "center", paddingTop: 32 },
  topic: { fontSize: 20, fontWeight: "bold" },
  image: { height: 250, width: "100%", marginTop: 32 },
  body: { padding: 16 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginTop: 8,
    fontSize: 16,
    backgroundColor: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 15,
  },
  buttonText: { color: "black", fontSize: 16 },
  result: {
    backgroundColor: "#ecf0f1",
    paddingVertical: 32,
    paddingHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resultValue: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  resultCategory: { fontSize: 16, fontWeight: "bold" },
});

export default BmiScreen;
