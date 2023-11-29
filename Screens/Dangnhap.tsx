import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import {
  loginApi,
  setAccessToken,
  getAccessToken,
} from "../Service/Authentication";
import { ValidateEmail, ValidatePassword } from "../Service/Validate";
//import { useNavigate } from "react-router-dom";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Dangnhap(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!(ValidateEmail(email) && ValidatePassword(password))) {
      alert("Email hoặc mật khẩu không hợp lệ!");
    }
    try {
      const loginResponse = await loginApi({
        email,
        password,
      });
      const { data } = loginResponse;
      console.log(data);
      alert("Đăng nhập thành công!");
      props.navigation.navigate("Home");

      //Lưu token lại
      const result = await setAccessToken(data?.tokens?.access?.token);
      if (result) {
        alert("Đăng nhập thành công!");
        const accessToken = await getAccessToken();
        console.log(accessToken);
      } else {
        alert("Lỗi khi đăng nhập: Không thể lưu accesstoken");
      }
    } catch (err) {
      const { data } = err.response;
      alert(data.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Đăng Nhập </Text>
        <Image style={styles.logo} source={require("../assets/GATlogo.png")} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          placeholder=""
          style={styles.input}
        />
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
          placeholder=""
          style={styles.input}
        />
      </View>
      <View style={styles.button2}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Quenmatkhau")}
        >
          <Text style={styles.text2}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => props.navigation.navigate("Dangky")}
      >
        <Text style={styles.registerText}>
          Don't have an account? Register here
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#97F2F3",
    paddingTop: 70,
  },

  content: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },

  text1: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
  },
  text2: {
    color: "red",
  },

  logo: {
    width: 100,
    height: 100,
    margin: 20,
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  input: {
    width: "90%",
    padding: 10,
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 33,
    borderColor: "gray",
  },
  registerText: {
    marginTop: 30,
    color: "black",
  },

  label: {
    marginVertical: 4,
    padding: 5,
    alignSelf: "flex-start",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "skyblue",
    width: "50%",
    alignItems: "center",
  },
  button1: {
    marginTop: 50,
  },
  button2: {
    width: "100%",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Dangnhap;
