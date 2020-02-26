import React, { useState, useReducer } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text, Content, Form, Item, Input, Label, Footer, FooterTab } from 'native-base';

export default function ProfileView(props) {
    return (
        <Container>
            <Content>
                <Text> |Profile </Text>
            </Content >
        </Container >
    );
}
const styles = StyleSheet.create({
    inputtext: {
        marginBottom: 10
    },
    label: {
        color: "grey"
    },
    next: {
        color: '#fff'
    }

});