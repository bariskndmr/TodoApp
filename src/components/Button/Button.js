import React,{ useState } from 'react';
import {Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from './Button.style';

export default Button = ({submitHandler}) => {
    const [text, setText] = useState('');
    return (
        <View style={Styles.container}>
            <TextInput style={Styles.input} onChangeText={setText} placeholder="Todo..." placeholderTextColor="white" />
            <TouchableOpacity
            disabled={(!text  ?  true : false )} 
            style={[Styles.button, { backgroundColor: text ? '#ffa500' : '#808080' }]}
            onPress={() => submitHandler(text)}
            >
                <Text style={Styles.text}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}