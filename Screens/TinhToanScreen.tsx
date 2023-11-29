import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
const TinhToanScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.touch, { backgroundColor: "#FFDDDD" }]}>
        <TouchableOpacity
          style={styles.detail}
          onPress={() => navigation.navigate("BmiScreen")}
        >
          <View>
            <Image
              source={require("../assets/10476452.png")}
              style={styles.logo}
            />
            <Text style={styles.topic}>BMI</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.des}>
              Chỉ số BMI (Body Mass Index) hay còn gọi là chỉ số khối cơ thể,
              chỉ số thể trọng, là một công cụ thường được sử dụng để đo lượng
              mỡ trong cơ thể. Chỉ số BMI chuẩn được tính dựa trên chiều cao và
              cân nặng.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.touch, { backgroundColor: "#D9FFDF" }]}>
        <TouchableOpacity
          style={styles.detail}
          onPress={() => navigation.navigate("KcalScreen")}
        >
          <View>
            <Image
              source={require("../assets/calories.png")}
              style={styles.logo}
            />
            <Text style={styles.topic}>KCal</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.des}>
              Kcal là đơn vị đo lường năng lượng trong hệ thống đo lường quốc tế
              (SI).1 kilocalorie (kcal) tương đương với lượng nhiệt cần thiết để
              tăng nhiệt độ của một kilogram nước lên 1 độ Celsius. Kcal thường
              được sử dụng để đo lường năng lượng trong thực phẩm và hoạt động
              thể chất.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.touch, { backgroundColor: "#FFFFCF" }]}>
        <TouchableOpacity
          style={styles.detail}
          onPress={() => navigation.navigate("BodyScreen")}
        >
          <View>
            <Image source={require("../assets/body.png")} style={styles.logo} />
            <Text style={styles.topic}>Body</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.des}>
              Tỉ lệ cơ thể dựa trên kích thước ba vòng (body shape ratio) là một
              khái niệm trong việc đo lường và phân loại hình dáng cơ thể của
              con người. Ba vòng ở đây bao gồm vòng eo, vòng ngực và vòng mông.
              Tỉ lệ này được tính bằng cách so sánh các kích thước của ba vòng
              này với nhau.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9FFFF",
  },
  touch: {
    marginVertical: 10,
    borderRadius: 15,
    padding: 15,
    width: "90%",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  topic: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  des: {
    fontSize: 16,
    color: "black",
  },
});

export default TinhToanScreen;
