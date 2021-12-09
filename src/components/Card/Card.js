import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Card.style';

const Card = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.id)} style={Styles.card}>
        <Text style={Styles.text}>{item.content}</Text>
        </TouchableOpacity>
    )
}

export default Card;