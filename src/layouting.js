import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Punya si Hammam</Text>
      <Text style={styles.centeredText}>223510675</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Light gray background
  },
  centeredText: {
    fontSize: 24,
    color: 'blue', // Blue text color
    fontWeight: 'bold', // Bold text style
    marginBottom: 20, // Spacing between text and boxes
  },
  boxContainer: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Space between the boxes
    alignItems: 'center', // Center items vertically
    width: '80%', // Occupy 80% of the screen width
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Customizable color for Box 1
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green', // Customizable color for Box 2
  },
});

export default FlexBoxLayout;
