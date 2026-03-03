import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import FillUp from './fillup';
import StudentList from './list';
import StudentInfo from './info';
import './FirebaseConfig';

export default function App() {

  const [tab, setTab] = useState('camera'); // 'camera' | 'fillup' | 'dashboard'
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);


  if (!permission) {
    return <View />;
  } 

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo.uri);
        setTab('fillup'); 
      } catch (error) {
        Alert.alert('Error', 'Failed to capture photo');
      }
    }
  }


  // main UI: switch based on selected tab
  return (
    <View style={styles.container}>
      {tab === 'camera' && (
        <>
          <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
          <TouchableOpacity style={styles.toggleButton} onPress={toggleCameraFacing}>
            <Text style={styles.buttonText}>🔄</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <Text style={styles.buttonText}>●</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {tab === 'fillup' && (
        <FillUp
          photoUri={photoUri}
          studentId={studentId}
          setStudentId={setStudentId}
          studentName={studentName}
          setStudentName={setStudentName}
          onProceed={() => {
            setStudentList(list => [...list, { id: studentId, name: studentName, photo: photoUri }]);
            setTab('dashboard');
          }}
        />
      )}

      {tab === 'dashboard' && (
        <StudentList
          students={studentList}
          onRegisterAnother={() => {
            setPhotoUri(null);
            setStudentId('');
            setStudentName('');
            setTab('camera');
          }}
          onSelect={student => {
            setSelectedStudent(student);
            setTab('info');
          }}
        />
      )}

      {tab === 'info' && (
        <StudentInfo
          student={selectedStudent}
          onBack={() => setTab('dashboard')}
        />
      )}

      {/* simple tab bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setTab('camera')}>
          <Text style={tab === 'camera' ? styles.activeTab : styles.tab}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('fillup')}>
          <Text style={tab === 'fillup' ? styles.activeTab : styles.tab}>Fill‑Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('dashboard')}>
          <Text style={tab === 'dashboard' ? styles.activeTab : styles.tab}>Dashboard</Text>
        </TouchableOpacity>
        {selectedStudent && (
          <TouchableOpacity onPress={() => setTab('info')}>
            <Text style={tab === 'info' ? styles.activeTab : styles.tab}>Info</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,                // moved up a bit
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    position: 'absolute',
    bottom: 80,
    right: 30,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 25,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  preview: {
    width: '80%',
    height: 300,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  readonly: {
    backgroundColor: '#eee',
  },
  label: {
    color: 'white',
    marginTop: 10,
    marginBottom: 2,
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    color: 'white',
    marginHorizontal: 5,
  },
  activeTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
    marginHorizontal: 5,
  },
});

