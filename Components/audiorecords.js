import React from 'react';
 
import {  Pressable, Text, View,useWindowDimensions } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; 
import { Image } from 'react-native-web';
import { Card } from 'react-native-paper';
import styles from './styles';

export default function Apps() {
  const [record, setRecoding] = React.useState();
  const [recordings, setRecodings] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const {height} = useWindowDimensions()

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const {recording} = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
        );

        setRecoding(recording);
      } else {
        setMessage('Please allow access to microphone');
      }
    } catch (err) {
      console.log('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecoding(undefined);
    await record.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const {sound, status} = await record.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: record.getURI(),
    });
    setRecodings(updatedRecordings);
   
  }
  function getDurationFormatted(milllis) {
    const minutes = milllis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay} : ${secondsDisplay}`;
  }

  return (
    <Card
    style={{marginLeft:0,marginRight:0,marginBottom:0,marginTop:0,borderTopColor:'gray',borderRadius:5, borderTopWidth:5, backgroundColor:'#fffff'}}
    >
    <View style={{...styles.scrollViewStyle, height: height}}>
    <View style={{...styles.container}}>
        <Text>{message}</Text>
        <Image style={{width:370, height:300, alignSelf:"center", borderRadius:5,marginTop:10}} 
                  source="https://images.pexels.com/photos/347700/pexels-photo-347700.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <Pressable
        style={{...styles.btnRec}}
          onPress={record ? stopRecording : startRecording}>
 
            <AntDesign name="customerservice" size={64} color={record ? "red" :"white"} />
            <Text style={{color:'orange'}}>Click To Record</Text>
          </Pressable>
        
        {
          recordings.map((recordinglines, index)=>{
            return (
              <View style={{...styles.recordresults}} key={index}>
                <View>
                <Text style={{...styles.recordresultsheading, color:"orange"}}>Audio record {index + 1}</Text> 
   
                </View>
                <Pressable onPress={()=>recordinglines.sound.replayAsync()}>
   
                    <AntDesign name="playcircleo" size={24} color="white" />
                    <Text style={{color:'orange'}}>Play</Text>
                </Pressable>
              </View>
            )
          })
        }
      </View></View></Card>
  );
}
