import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from 'axios';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3000/users')
            .then(users => users)
            .then(users => {
                this.setState({
                    userName: users.data[0].username,
                    password: users.data[0].password
                })
                console.log(users.data)
            })
            .then(users => console.log(users.data))

    }

    //      .then(users => console.log(users.data[0].id))
    render() {
        const { userName, password } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>Welcome Back!</Text>
                <Text style={{ alignSelf: 'center', color: '#424949', marginVertical: 5 }}>Please Login Your Account</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder='User Name'
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    value={userName}
                    onChangeText={(value) => this.setState({ userName: value })}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(value) => this.setState({ password: value })}

                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                >
                    <Text style={styles.submitButtonText}> Login </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        backgroundColor: "#F4F6F7"
    },
    containerText: {
        color: '#424949',
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#FBFCFC',
        margin: 15,
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    submitButton: {
        backgroundColor: "#85C1E9",
        padding: 10,
        margin: 15,
        alignItems: "center",
        height: 40,
        borderRadius: 10,

    },
    submitButtonText: {
        color: "white",
        fontSize: 16,
    }
})

