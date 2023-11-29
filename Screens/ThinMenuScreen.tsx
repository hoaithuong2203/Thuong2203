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
    data: ['Gà kho gừng' , 'Cơm trắng' ,' Canh chua'],
  },
  {
    title: 'Ngày 2',
    data: ['Tôm rang me' , 'Cơm trắng' , 'Rau muống xào tỏi'],
  },
  {
    title: 'Ngày 3',
    data: ['Heo quay' , 'Cơm trắng' , 'Canh bí đỏ'],
  },
  {
    title: 'Ngày 4',
    data: [ 'Cá chiên giòn ', 'Cơm trắng' ,' Đậu hũ hầm'],
  },
  {
    title: 'Ngày 5',
    data: ['Bò lúc lắc' , 'Cơm trắng' ,' Súp lơ'],
  },
  {
    title: 'Ngày 6',
    data: ['Lẩu thái ', 'Bún' ,' Gỏi cuốn '],
  },
  {
    title: 'Ngày 7',
    data: ['Mì xào' , 'Bánh mì ', 'Salad rau trộn'],
  },
];

const ThinMenuScreen = () => (
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
    backgroundColor: '#d3c0f9',
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

export default ThinMenuScreen;