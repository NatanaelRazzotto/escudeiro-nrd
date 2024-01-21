import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { MapGeolocation } from './src/screens/Geolocation/map';
import { Home } from './src/screens/Home';

import { ThemeProvider } from 'styled-components/native';
import  THEME from './src/screens/theme'


export default function App() {
 
  return (
    <ThemeProvider theme={THEME}>
        <Home></Home>
    </ThemeProvider>
  );
}

