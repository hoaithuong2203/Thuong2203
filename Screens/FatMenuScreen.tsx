import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Ngày 1',
    data: ['Salad rau củ ',' Cá hồi sốt cam' , 'Sữa tươi không đường'],
    
  },
  {
    title: 'Ngày 2',
    data: ['Sữa chua Hy Lạp' ,' Ức gà ',' Bơ và Táo'],
    
  },
  {
    title: 'Ngày 3',
    data: ['Khoai lang' , 'Táo ', 'Cá hồi hấp đậu que'],
   
  },
  {
    title: 'Ngày 4',
    data: [ 'Yến mạch trộn hạt chia' , 'Cơm gạo nứt' , 'Chuối và Táo'],
    
  },
  {
    title: 'Ngày 5',
    data: ['Chuối và hạnh nhân' , 'Bánh mì ngũ cốc' , 'Tôm hấp'],
    
  },
  {
    title: 'Ngày 6',
    data: ['Khoai lang' , 'Ức gà rán' , 'Táo và Bơ  '],
    
  },
  {
    title: 'Ngày 7',
    data: ['Sữa chua không đường' ,'Thịt bò hầm' , 'Rau củ hấp'],
  },
];

const FatMenuScreen = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={[styles.item]}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#b5ddd1',
    padding: 20,
    marginVertical: 8,
    borderRadius:10
  },
  header: {
    fontSize: 20,
    
  },
  title: {
    fontSize: 15,
   
  },
});

export default FatMenuScreen;