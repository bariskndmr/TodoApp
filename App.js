import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "./src/components/Header";
import Card from "./src/components/Card";
import Button from "./src/components/Button";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([
    {id: "1", content: "Read a book", complete: false },
    {id: "2", content: "Do sport", complete: false },
    {id: "3", content: "Go to cinema", complete: false },
]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
     prevTodos(todos.filter(item => item.id != key));
    }); 
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {key: Math.random().toString(), content:text},
        ...prevTodos
      ];
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS == "ios" ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        <Header count={counter} />
        <FlatList
          data={todos}
          keyExtractor={todos.id}
          renderItem={({ item }) => <Card pressHandler={pressHandler} item={item} />}
        />
        <Button submitHandler={submitHandler} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112027",
  },
});
