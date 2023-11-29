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
    data: [' Ức gà luộc', 'Sữa tươi không đường', 'Salad cá hồi'],
  },
  {
    title: 'Ngày 2',
    data: ['Salad gà nướng' , 'Cơm gạo nứt' , 'Yến mạch với sữa tươi tách béo'],
  },
  {
    title: 'Ngày 3',
    data: ['Trứng gà luộc' , 'Tôm nướng' , 'Canh rau củ thập cẩm'],
  },
  {
    title: 'Ngày 4',
    data: [ 'Bánh mì kẹp ức gà' , 'Sữa bột ngũ cốc' , 'Đậu hũ hầm'],
  },
  {
    title: 'Ngày 5',
    data: ['Bò lúc lắc' , 'Cơm trắng' , 'Rau luộc thập cẩm'],
  },
  {
    title: 'Ngày 6',
    data: [' Bánh mì nguyên cám' , 'Thịt bò nướng' , 'Nước ép cần tây '],
  },
  {
    title: 'Ngày 7',
    data: [' Salad rau củ' , 'Cơm gạo nứt' , 'Sữa tách béo '],
  },
];

const UnderFatMenuScreen = () => (
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
    backgroundColor: '#d7e7a9',
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
export default UnderFatMenuScreen;