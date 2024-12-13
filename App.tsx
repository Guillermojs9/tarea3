import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Group } from './Group';
import { RiegoData } from './riegoData';
import { riegoMapper } from './riegoMapper';
import { useState, useEffect } from 'react';

async function getGroups(): Promise<Group[]> {
  const response = await fetch("http://192.168.1.136:3000/items");
  const dataJson = await response.json();
  const dataGroups = dataJson.map((item: RiegoData) => riegoMapper(item));
  console.log(dataJson);
  return dataGroups;
}

export default function App() {
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroups();
      setGroups(data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.groupTitle}>{item.name}</Text>
            <Text>{item.lastDate}</Text>
            <FlatList
              data={item.valvulas}
              keyExtractor={(valvula, index) => index.toString()}
              renderItem={({ item: valvula }) => (
                <View style={styles.valvulaContainer}>
                  <Text style={styles.valvulaText}>Nombre: {valvula.nombre}</Text>
                  <Text style={styles.valvulaText}>Estado: {valvula.estado}</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  valvulaContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
  valvulaText: {
    fontSize: 16,
  },
});
