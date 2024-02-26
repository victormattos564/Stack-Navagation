import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Profile")}>
        <Text>Profile</Text>

      </TouchableOpacity>
    </View>
  )
}