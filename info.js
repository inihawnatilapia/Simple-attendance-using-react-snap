import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

// shows selected student's details
export default function StudentInfo({ student, onBack }) {
  if (!student) {
    return <View style={styles.container}><Text style={styles.label}>No student selected.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Info</Text>
      {student.photo && (
        <Image source={{ uri: student.photo }} style={styles.photo} />
      )}
      <Text style={styles.label}>Name: {student.name}</Text>
      <Text style={styles.label}>ID: {student.id}</Text>
      <View style={{height:20}} />
      <Button title="Back to List" onPress={onBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFC00',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#000',
    marginBottom: 10,
    fontSize: 18,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
});