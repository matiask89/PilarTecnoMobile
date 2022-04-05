import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      mainCont: {
        width:'100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      rowCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonCont: {
       width: width/3,
       height: width/3,
       margin: 10,
       borderRadius: 10,
       alignItems: 'center',
       justifyContent: 'center',
      },
      tittle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      text: {
        fontSize:20, 
        fontWeight:'bold', 
        color:'white'
      }
})