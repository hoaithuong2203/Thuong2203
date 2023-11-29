import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Switch,
  StyleSheet
} from 'react-native';

import UIHeader from '../components/UIHeader';

import DatePicker from '@react-native-community/datetimepicker';
//import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';

function ReminderScreen(props) {
  const [timeMorning, setTimeMorning] = useState(new Date());
  const [openTimePickerMorning, setOpenTimePickerMorning] = useState(false);
  const [openTimePickerAfterNoon, setOpenTimePickerAfterNoon] = useState(false);
  const [openTimePickerNight, setOpenTimePickerNight] = useState(false);
  const [openTimePickerWeight, setOpenTimePickerWeight] = useState(false);
  const [isMealSwitchOn, setIsMealSwitchOn] = useState(false);
  const [isWeightSwitchOn, setIsWeightSwitchOn] = useState(false);
  const [isWaterSwitchOn, setIsWaterSwitchOn] = useState(false);
  const [timeAfternoon,setTimeAfternoon]=useState(new Date());
  const [timeNight,setTimeNight]=useState(new Date());
  const [timeWeight,setTimeWeight]=useState(new Date());
  

  const toggleMealSwitch = () => {
    setIsMealSwitchOn(!isMealSwitchOn);
  };
  const toggleWaterSwitch = () => {
    setIsWaterSwitchOn(!isWaterSwitchOn);
  };
  const toggleWeightSwitch = () => {
    setIsWeightSwitchOn(!isWeightSwitchOn);
  };
const onChangeTimeMorning=(event, value)=>{
    setOpenTimePickerMorning(!openTimePickerMorning)
    setTimeMorning(value)
  }
  const onChangeAfternoon=( event,value)=>{
    setOpenTimePickerAfterNoon(!openTimePickerAfterNoon)
    setTimeAfternoon(value)
  }
  const onChangeTimeNight=( event,value)=>{
    setOpenTimePickerNight(!openTimePickerNight)
    setTimeNight(value)
  }
  const onChangeTimeWeight=(event, value)=>{
    setOpenTimePickerWeight(!openTimePickerWeight)
    setTimeWeight(value)
  }
  return (
    <View style={{ flex: 1 }}>
      <UIHeader title={"Reminder"} />
      <ScrollView>
      <View style={{ flex: 2 }}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/nuoc.jpg")}
              resizeMode="cover"
            />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View
              style={{
                height: 40,
                backgroundColor: "#ffffb5",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/tl.jpg")}
                resizeMode="cover"
              />
              <Image
                source={require("../assets/water.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text
                style={{
                  color: "black",
                }}
              >
                Đặt lời nhắc uống nước {" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ flex: 1 }}>Khoảng thời gian nhắn nhở  </Text>
              <Switch
                style={{ height: 30 }}
                value={isWaterSwitchOn}
                onValueChange={toggleWaterSwitch}
              />
            </View>

            {isWaterSwitchOn ? (
              <>
                <View style={styles.container}>
                  <TouchableOpacity><View style={styles.button}>
                    <Text style={styles.buttonTitle}> 1 giờ </Text>
                  </View></TouchableOpacity>
                  <TouchableOpacity><View style={styles.button}>
                    <Text style={styles.buttonTitle}> 2 giờ </Text>
                  </View></TouchableOpacity>
                  <TouchableOpacity><View style={styles.button}>
                    <Text style={styles.buttonTitle}> 3 giờ </Text>
                  </View></TouchableOpacity>
                </View>
              </>
            ) : null}
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/nnbuaan.jpg")}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: "#b5ddd1",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../assets/dinner.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: "black" }}>Bữa ăn nhắc nhở </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ flex: 1 }}>Nhắc nhở để có bữa ăn của bạn </Text>
              <Switch
                style={{ height: 30 }}
                value={isMealSwitchOn}
                onValueChange={toggleMealSwitch}
              />
            </View>

            {isMealSwitchOn ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setOpenTimePickerMorning(true);
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 16, paddingStart: 10 }}
                  >
                    Bữa sáng: {timeMorning.getHours()}:
                    {timeMorning.getMinutes()}
                  </Text>
                </TouchableOpacity>
                {openTimePickerMorning && (
                  <DatePicker
                    mode={"time"}
                    value={timeMorning}
                    is24Hour={true}
                    onChange={onChangeTimeMorning}
                  />
                )}
                <TouchableOpacity
                  onPress={() => {
                    setOpenTimePickerAfterNoon(true);
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 16, paddingStart: 10 }}
                  >
                    Bữa trưa: {timeAfternoon.getHours()}:
                    {timeAfternoon.getMinutes()}
                  </Text>
                </TouchableOpacity>
                {openTimePickerAfterNoon && (
                  <DatePicker
                    mode={"time"}
                    value={timeAfternoon}
                    is24Hour={true}
                    onChange={onChangeAfternoon}
                  />
                )}
                <TouchableOpacity
                  onPress={() => {
                    setOpenTimePickerNight(true);
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 16, paddingStart: 10 }}
                  >
                    Bữa tối: {timeNight.getHours()}:{timeNight.getMinutes()}
                  </Text>
                </TouchableOpacity>
                {openTimePickerNight && (
                  <DatePicker
                    mode={"time"}
                    value={timeNight}
                    is24Hour={true}
                    onChange={onChangeTimeNight}
                  />
                )}
              </>
            ) : null}
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-start"}}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/tl.jpg")}
              resizeMode="cover"
            />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View
              style={{
                height: 40,
                backgroundColor: "#ffffb5",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/tl.jpg")}
                resizeMode="cover"
              />
              <Image
                source={require("../assets/sca.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text
                style={{
                  color: "black",
                }}
              >
                Nhắc nhở trọng lượng{" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ flex: 1 }}>Nhắc nhở để trọng lượng của bạn </Text>
              <Switch
                style={{ height: 30 }}
                value={isWeightSwitchOn}
                onValueChange={toggleWeightSwitch}
              />
            </View>

            {isWeightSwitchOn ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setOpenTimePickerWeight(true);
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 16, paddingStart: 10 }}
                  >
                    Thời gian: {timeWeight.getHours()}:{timeWeight.getMinutes()}
                  </Text>
                </TouchableOpacity>
                {openTimePickerWeight && (
                  <DatePicker
                    mode={"time"}
                    value={timeWeight}
                    is24Hour={true}
                    onChange={onChangeTimeWeight}
                  />
                )}
              </>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  image: { height: 90, width: 'auto', marginTop: 6 },
  button:{
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#00FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    
  },
  buttonTitle:{
    fontSize: 14,
  }
})
export default ReminderScreen;
