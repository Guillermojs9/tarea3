import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import { RiegoData } from './src/interface/riegoData';
import { riegoMapper } from './src/mapper/riegoMapper';
import { useState, useEffect } from 'react';
import { Group } from './src/interface/riegoDataLocal';
import { useGroups } from './src/hooks/useGroups';

async function getGroups(): Promise<Group[]> {
  const response = await fetch("http://192.168.1.136:3000/items");
  const dataJson = await response.json();
  const dataGroups = dataJson.map((item: RiegoData) => riegoMapper(item));
  console.log(dataJson);
  return dataGroups;
}

export default function App() {
  const { groups } = useGroups();
  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.groupContainer}>
            <Text style={styles.groupTitle}>{item.name}</Text>
            <Text style={styles.lastDateText}>{item.lastDate}</Text>
            <FlatList
              data={item.valvulas}
              keyExtractor={(valvula, index) => index.toString()}
              renderItem={({ item: valvula }) => (
                <View style={styles.valvulaContainer}>
                  <Text style={styles.valvulaText}>Nombre: {valvula.nombre}</Text>
                  <Text style={styles.valvulaText}>Estado: {valvula.estado}</Text>
                  <Switch
                    value={valvula.estado}
                    onValueChange={() => { }}
                    style={styles.switch}
                  />
                </View>
              )}
            />
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  groupContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  lastDateText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  valvulaContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  valvulaText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  switch: {
    marginLeft: 10,
  },
});