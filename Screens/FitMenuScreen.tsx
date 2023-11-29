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
    data: ['Thịt bò xào' , 'Cơm trắng' , 'Canh cải xanh'],
  },
  {
    title: 'Ngày 2',
    data: ['Thịt lợn luộc' , 'Cơm trắng' , 'Rau su su hấp'],
  },
  {
    title: 'Ngày 3',
    data: ['Gà xào nấm' , 'Cơm trắng' , 'Canh rau muống'],
  },
  {
    title: 'Ngày 4',
    data: [ 'Xúc xích rán' , 'Cơm trắng' , 'Đậu hũ hầm'],
  },
  {
    title: 'Ngày 5',
    data: ['Bò lúc lắc' , 'Cơm trắng' , 'Rau luộc thập cẩm'],
  },
  {
    title: 'Ngày 6',
    data: [' Gỏi cuốn tôm thịt' , 'Bún' , 'Thịt xào '],
  },
  {
    title: 'Ngày 7',
    data: [' Sữa' , 'Bánh mì' , 'Salad rau trộn '],
  },
];

const FitMenuScreen = () => (
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
    backgroundColor: '#ffffb5',
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

export default FitMenuScreen;