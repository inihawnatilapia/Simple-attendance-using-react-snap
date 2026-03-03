import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// displays an array of student objects ({id,name,photo}) and a button to register another
// calls onSelect(student) when a name is tapped
export default function StudentList({ students, onRegisterAnother, onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance Dashboard</Text>
      {students.length === 0 ? (
        <Text style={styles.empty}>No students registered yet.</Text>
      ) : (
        <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
          {students.map((s, idx) => (
            <TouchableOpacity key={idx} style={styles.item} onPress={() => onSelect && onSelect(s)}>
              {s.photo && <Image source={{ uri: s.photo }} style={styles.thumb} />}
              <View style={styles.textWrapper}>
                <Text style={styles.label}>{idx + 1}. {s.name}</Text>
                <Text style={styles.subLabel}>ID: {s.id}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <TouchableOpacity style={styles.addButton} onPress={onRegisterAnother}>
        <Text style={styles.addText}>Attendance</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#000',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    width: '90%',
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  subLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  list: {
    width: '100%',
  },
  listContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  empty: {
    color: '#aaa',
    marginVertical: 20,
    fontSize: 16,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#FFFC00',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  addText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});