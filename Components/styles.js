import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
     
    navcontainer:{
        backgroundColor:'#5F7161',
    },
     
    recordButton:{
      borderRadius:25 ,
      backgroundColor:'#DFE8CC',
      width:100,
      height:50,
      alignSelf:'center'
    },
    fixToText: {
        width:100,
        height:30,
        justifyContent: 'center',   
        alignItems: 'center',
        backgroundColor: '#F66B0E',
        borderRadius:25,
        alignSelf:'right'
    },


    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      btnRec: {
        height: 100,
        backgroundColor: '#064420',
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
        marginTop: 10,
        marginBottom: 20
      },
      img:{
        marginTop:10
        
      },
      recordresults: {
        display: 'flex',
        width: '90%',
        height: 65,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        elevation: 3,
        backgroundColor:"#064420",
        shadowColor: '#171717',
        borderRadius: 10,
      },
      recordresultsheading: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      font: {
        fontSize: 14,
        marginTop: 5,
      },
      audioresults:{
        backgroundColor:"#D0C9C0"
      },
      scrollViewStyle: {
        width: '100%',
      }
})