import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Login />
      {/* <Home /> */}
    </>
  );
}

