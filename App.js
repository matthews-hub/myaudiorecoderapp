import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Apps from './Components/audiorecords';
import Navbar from './Components/navbar';
 
export default function App() {


  return (
    <View >
      <Navbar />
      <Apps/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    color:'orange',
    backgroundColor: '#3F4E4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
