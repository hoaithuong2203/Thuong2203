import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { KcalApi } from "../Service/Authentication";

const KcalScreen = ({ navigation }: { navigation: any }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(0);

  const calculateCalories = async () => {
    if (
      isNaN(parseInt(age)) ||
      age.trim() === "" ||
      isNaN(parseInt(height)) ||
      height.trim() === "" ||
      isNaN(parseInt(weight)) ||
      weight.trim() === ""
    ) {
      Alert.alert("Vui lòng nhập đầy đủ số liệu");
      setCalories(0);
      return;
    }
  };

  const SaveKcal = async () => {
    try {
      const response = await KcalApi({
        age,
        gender,
        height,
        weight,
        activityLevel,
      });
      if (response.status === 200) {
        const { data } = response;
        setCalories(data);
        Alert.alert("Lưu thành công");
      }
    } catch (error) {
      Alert.alert("Lưu thất bại, vui lòng thử lại");
    }
  };
  const resetInputs = () => {
    setAge("");
    setGender("");
    setHeight("");
    setWeight("");
    setActivityLevel("");
    setCalories(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.kq}>
        <Text style={styles.result}>Năng Lượng Tiêu Thụ Trong Ngày</Text>
      </View>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../assets/Kcal1.png")} />
      </View>
      <View>
        <Text style={styles.topic}>Tuổi</Text>
        <TextInput
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          style={styles.nhap}
        />
      </View>
      <View>
        <Text style={styles.topic}>Giới Tính</Text>
        <Picker
          style={styles.choose}
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Nam" value="male" />
          <Picker.Item label="Nữ" value="female" />
        </Picker>
      </View>
      <View>
        <Text style={styles.topic}>Chiều Cao(cm)</Text>
        <TextInput
          style={styles.nhap}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.topic}>Cân Nặng(kg)</Text>
        <TextInput
          style={styles.nhap}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.topic}>Mức Độ Hoạt Động </Text>
        <Picker
          style={styles.choose}
          selectedValue={activityLevel}
          onValueChange={(itemValue) => setActivityLevel(itemValue)}
        >
          <Picker.Item label="Ít Vận Động" value="sedentary" />
          <Picker.Item label="Vận Động Nhẹ" value="lightlyActive" />
          <Picker.Item label="Vận Động Vừa Phải" value="moderatelyActive" />
          <Picker.Item label="Năng Động" value="veryActive" />
          <Picker.Item label="Hoạt Động Mạnh" value="extraActive" />
        </Picker>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={SaveKcal} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={calculateCalories} style={styles.button}>
          <Text style={styles.buttonText}>Calories</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetInputs} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      {calories !== 0 && (
        <View style={styles.kq}>
          <Text style={styles.result}>Calories bạn cần là: {calories}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "#FFFF99",
  },
  kq: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  result: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  header: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 380,
    height: 300,
    resizeMode: "contain",
  },
  topic: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  nhap: {
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginBottom: 10,
  },
  choose: {
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#FF3300",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default KcalScreen;
