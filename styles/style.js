
import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({

  
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 44,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
  },
  addButton: {
    marginLeft: 8,
    backgroundColor: Colors.blue,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: Colors.white,
    fontWeight: '600',
  },
  list: {
    marginTop: 8,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    marginRight: 12,
  },
  checkboxDone: {
    backgroundColor: Colors.lightBlue,
    borderColor: Colors.blue,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
  },
  todoTextDone: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
  editRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editInput: {
    flex: 1,
    height: 40,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  saveButton: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 6,
  },
  saveText: {
    color: Colors.white,
    fontWeight: '600',
  },
  cancelButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  cancelText: {
    color: '#666',
    fontWeight: '600',
  },
  editButton: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  editText: {
    color: Colors.blue,
    fontWeight: '600',
  },
  deleteButton: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  deleteText: {
    color: '#ff5252',
    fontWeight: '600',
  },
  empty: {
    textAlign: 'center',
    color: '#9e9e9e',
    marginTop: 24,
  },
});