import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from './styles/style';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Colors from './styles/Colors';

export default function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    const text = task.trim();
    if (!text) return;
    const newTodo = { id: Date.now().toString(), text, completed: false };
    setTodos([newTodo, ...todos]);
    setTask('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = () => {
    const text = editingText.trim();
    if (!text) return;
    setTodos(todos.map(t => (t.id === editingId ? { ...t, text } : t)));
    setEditingId(null);
    setEditingText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        onPress={() => toggleTodo(item.id)}
        style={[styles.checkbox, item.completed && styles.checkboxDone]}
      />

      {editingId === item.id ? (
        <View style={styles.editRow}>
          <TextInput
            value={editingText}
            onChangeText={setEditingText}
            style={[styles.input, styles.editInput]}
            onSubmitEditing={saveEdit}
            returnKeyType="done"
            autoFocus
          />
          <TouchableOpacity onPress={saveEdit} style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancelEdit} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={[styles.todoText, item.completed && styles.todoTextDone]}>{item.text}</Text>
          <TouchableOpacity onPress={() => startEdit(item.id, item.text)} style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Add a task"
          value={task}
          onChangeText={setTask}
          style={styles.input}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
        <TouchableOpacity onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>No tasks yet — add one above.</Text>}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}