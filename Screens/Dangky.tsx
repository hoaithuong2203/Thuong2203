import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ValidateEmail, ValidatePassword } from "../Service/Validate";
import { registerApi } from "../Service/Authentication";

function Dangky(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!(ValidateEmail(email) && ValidatePassword(password))) {
      alert("Email hoặc mật khẩu không hợp lệ!");
    } else {
      try {
        const registrationResponse = await registerApi({
          name,
          email,
          password,
        });
        const { data } = registrationResponse;
        alert("Đăng ký tài khoản thành công ");
        props.navigation.navigate("Dangnhap");
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Đăng Ký </Text>
        <Image style={styles.logo} source={require("../assets/logo-gat.png")} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Tên đăng nhập</Text>
        <TextInput
          value={name}
          onChangeText={(value) => {
            setName(value);
          }}
          placeholder=""
          style={styles.input}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          placeholder=""
          style={styles.input}
        />
        <Text style={styles.label}>Nhập mật khẩu</Text>
        <TextInput
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
          placeholder=""
          style={styles.input}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    backgroundColor: "#97F2F3",
  },

  content: {
    alignItems: "center",
    width: "100%",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
    alignItems: "center",
    resizeMode: "cover",
    borderRadius: 50,
  },
  input: {
    width: "90%",
    padding: 10,
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 33,
    borderColor: "gray",
  },
  label: {
    marginVertical: 4,
    padding: 5,
    alignSelf: "flex-start",
    marginLeft: 20,
  },

  buttons: {
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#8AC0DE",
    width: "55%",
    alignItems: "center",
  },
});

export default Dangky;
