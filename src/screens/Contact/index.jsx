import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Contact() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Profile")}>
        <Text>Profile</Text>
      </TouchableOpacity>
      
    </View>
  )
}
