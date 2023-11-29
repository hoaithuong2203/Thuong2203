import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Image } from "antd";

function Quenmatkhau(props) {
  const [Email, setEmail] = useState("");
  const handleQuenmatkhau1 = () => {
    props.navigation.navigate("Quenmatkhau1");
  };
  const handleDangnhap = () => {
    props.navigation.navigate("Dangnhap");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          resource={require("../assets/GATlogo.png")}
        />
        <Text style={styles.text1}> Quên mật khẩu</Text>
      </View>

      <View style={styles.text2}>
        <Text> Vui lòng nhập email để lấy mã xác nhận</Text>
      </View>

      <View>
        <TextInput
          value={Email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          placeholder="Nhập email đăng nhập"
          style={styles.input}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleQuenmatkhau1}>
          <Text>Gửi</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleDangnhap}>
        <Text style={styles.text3}>Quay lại đăng nhập</Text>
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

  input: {
    marginTop: 30,
    width: "90%",
    padding: 10,
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 30,
    borderColor: "gray",
  },
  label: {
    marginVertical: 4,
    padding: 5,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 40,
  },

  text2: {
    marginTop: 60,
    alignItems: "center",
  },

  buttons: {
    width: "25%",
    marginTop: 50,
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#8AC0DE",
    alignItems: "center",
  },

  text3: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default Quenmatkhau;
