import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

export const theme = {
  colors: {
    bar: '#262927',
    primary: 'cyan',
    active: '#36b8ff',
    inactive: '#8b96a7'
  },
  Button: {
    buttonStyle: 'red',
    tittleStyle: {
      color: '#293B47',
      fontWeight: 'bold'
    },
  },
  headerHeigth: heigth/8
}

