import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { appStyles as styles } from './styles';

function App() {

  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Task</Text>
        <Text style={styles.subtitle}>
          Enter your tasks in the texet box below and press the "Add" button to add.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          value={text}
          onChangeText={setText}
        />

        <TouchableOpacity style={styles.buttonContainer}
          onPress={handleAddTaskPress}>

          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity style={styles.taskDelete} onPress={()=>handleDeleteTaskPress(index)}>
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
}


export default App;
