import React from 'react';
import { View, Text, TextInput, Image, Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function FillUp({
  photoUri,
  studentId,
  setStudentId,
  studentName,
  setStudentName,
  onProceed,
}) {
  function handleSubmit() {
    // confirmation alert acts like the "Continue? (Edit / Proceed)" step
    Alert.alert(
      'Continue?',
      `ID: ${studentId}\nName: ${studentName}`,
      [
        { text: 'Edit', style: 'cancel' },
        { text: 'Proceed', onPress: onProceed },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Details</Text>
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      ) : (
        <Text style={styles.label}>No photo captured yet.</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />
      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    color: '#FFFC00',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
  },
  preview: {
    width: '80%',
    height: 200,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFFC00',
  },
  input: {
    width: '80%',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#494949',
    color: '#efefef',
    borderRadius: 25,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#FFFC00',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  submitText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },});