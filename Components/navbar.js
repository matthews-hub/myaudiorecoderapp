 import  React, { Text } from 'react-native';
import styles from './styles';
import {Appbar} from 'react-native-paper';
 
 

const Navbar = () => {
    return (
     
        
            <Appbar.Header style={{marginTop:10, borderRadius:80,...styles.navcontainer}}>
                <Appbar.Content style={{...styles.navhead}} title="Audio/Sound Recorder"/>
                 
            </Appbar.Header>
      
    )
}

export default Navbar;