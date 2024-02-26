import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Contact")}>
        <Text>Contact</Text>
      </TouchableOpacity>
    </View>
  )
}