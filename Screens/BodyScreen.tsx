import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { bodyshapeApi } from "../Service/Authentication";

const BodyShapeIdentifier = () => {
  const [round1, setRound1] = useState("");
  const [round2, setRound2] = useState("");
  const [round3, setRound3] = useState("");
  const [bodyShape, setBodyShape] = useState("");

  const identifyBodyShape = () => {
    // Validate input values
    if (round1 === "" || round2 === "" || round3 === "") {
      Alert.alert("Vui lòng nhập đầy đủ số đo ba vòng của bạn");
      return;
    }

    // Convert measurements to numbers
    const ratio1 = round1 / round2;
    const ratio2 = round1 / round3;
    const ratio3 = round2 / round3;

    let bodyShape = "";

    if (ratio1 >= 0.75 && ratio2 >= 0.75 && ratio3 >= 0.75)
      bodyShape = "Hình chữ nhật";
    else if (ratio1 >= 0.75 && ratio2 < 0.75 && ratio3 < 0.75)
      bodyShape = "Hình tam giác ngược";
    else if (ratio1 >= 0.75 && ratio2 >= 0.75 && ratio3 < 0.75)
      bodyShape = "Hình quả lê";
    else if (ratio1 < 0.75 && ratio2 < 0.75 && ratio3 >= 0.75)
      bodyShape = "Hình quả táo";
    else bodyShape = "Hình đồng hồ cát";

    setBodyShape(bodyShape);
  };
  const SaveBodyshape = async () => {
    try {
      const response = await bodyshapeApi({
        round1,
        round2,
        round3,
      });
      if (response.status === 200) {
        const { data } = response;
        setBodyShape(data);
        Alert.alert("Lưu thành công");
      }
    } catch (error) {
      Alert.alert("Lưu thất bại, vui lòng thử lại");
    }
  };
  const resetInputs = () => {
    setRound1("");
    setRound2("");
    setRound3("");
    setBodyShape("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>Hình Ảnh Minh Họa Dáng Người</Text>
        <Image
          style={styles.image}
          source={require("../assets/BodyTinhToan1.png")}
        />
      </View>
      <Text style={styles.request}>Nhập Số Đo Ba Vòng Của Bạn</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Vòng 1"
          onChangeText={(text) => setRound1(text)}
          value={round1}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Vòng 2"
          onChangeText={(text) => setRound2(text)}
          value={round2}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Vòng 3"
          onChangeText={(text) => setRound3(text)}
          value={round3}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={SaveBodyshape}
          style={[styles.button, { backgroundColor: "#D9FFDF" }]}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={identifyBodyShape}
          style={[styles.button, { backgroundColor: "#DEFDFD" }]}
        >
          <Text>BodyShape</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={resetInputs}
          style={[styles.button, { backgroundColor: "#FF9AA2" }]}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      {bodyShape !== "" && (
        <Text style={styles.result}>Cơ Thể Bạn Có {bodyShape}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    marginBottom: 30,
  },
  topic: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 35,
  },
  image: {
    width: 380,
    height: 300,
    resizeMode: "contain",
  },
  request: {
    fontSize: 18,
    marginBottom: 8,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BodyShapeIdentifier;
