import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

function Datlaimatkhau(props) {
  const [matkhaumoi, setMatkhaumoi] = useState("");
  const [renewpass, setRenewpass] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../assets/GATlogo.png")} />
        <Text style={styles.text1}> Đặt lại mật khẩu</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          value={matkhaumoi}
          onChangeText={(value) => {
            setMatkhaumoi(value);
          }}
          placeholder="Nhập mật khẩu mới"
          style={styles.input}
        />

        <TextInput
          value={renewpass}
          onChangeText={(value) => {
            setRenewpass(value);
          }}
          placeholder="Xác nhận lại mật khẩu mới"
          style={styles.input}
        />
      </View>
      const navigate = useNavigate();
      <TouchableOpacity onPress={() => props.navigation.navigate("Dangnhap")}>
        <Text style={styles.button}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#97F2F3",
    paddingTop: 90,
  },
  content: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
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
    marginTop: 40,
    marginBottom: 20,
    maxWidth: 280,
    alignSelf: "center",
  },

  input: {
    width: "90%",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderColor: "gray",
    marginTop: 20,
  },

  button: {
    width: "25%",
    marginTop: 50,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#8AC0DE",
    alignItems: "center",
  },
});

export default Datlaimatkhau;
