import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList} from 'react-native';
import logo from "./assets/todo-list(.png"
export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.viewlogo}><Image source={logo} style={styles.logo}/>
      <Text style={styles.textLogo}>Todo list</Text>
      </View>
      <View style={styles.viewTask}>
        <TextInput placeholder='Digite um numero'/>
        <Button title='Adicionar'/>
      </View> <FlatList styles = {styles.taskList}/>
      <StatusBar style = "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height :100,
    width : 100,

  },
  viewTask:{
    flexDirection: "row",
    margintop: 10,
  },
  inputTaks:{
 flex:1,
 paddingLeft:10,
 marginRight:10,
  }
  viewlogo:{
    alignItems: 'center',
    justifyContent:"center"
  },
  textLogo:{
    justifyContent: 'center'
  },
  taskList{
    flex:1,
  }

});
