import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

            <SafeAreaView style={[{flex: 1}, styles.container]}>
                <FlatList 
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
    },
    project: {
        color: '#fff',
        fontSize: 30,
    }
})