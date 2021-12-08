import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Header.style';

const Header = ({count}) => {
    return (
        <View style={Styles.container}>
            <Text style={[Styles.title, Styles.textProps]}>Todos</Text>
            <Text style={[Styles.counter, Styles.textProps]}>{count}</Text>
        </View>
    )
}

export default Header;