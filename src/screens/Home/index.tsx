import { Text, TextInput, TouchableOpacity, View} from "react-native";
import { Container, Header} from "./styles"
import bannerImg from '../assets/cover.png'

import { Input } from "../Components/input";
import { StyleSheet } from "react-native";
import { MapGeolocation}  from "../Geolocation/map"
import { useState } from "react";

interface FormData {
    kilometragem: string;
    combustivel: string;
    preco: string;
    veiculo: string;
    local: string;
    litros: string;
    total: string;
    
  }

export function Home (){

    const [formData, setFormData] = useState<FormData>({
        kilometragem: '',
        combustivel: 'Gasolina',
        preco: '',
        veiculo: 'Onix 2013',
        local: 'Local Padrão',
        litros: '',
        total: '0,00',
      });
    
      const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData({
          ...formData,
          [field]: value,
        });
      };

      const submitForm = () => {
        // Aqui você pode implementar a lógica para enviar os dados para a sua API
        console.log('Enviando para a API:', formData);
        // Adicione a lógica de chamada à API real aqui
      };
    
    return (
        <Container >
            <Header source={bannerImg}>
                <Input></Input>
            </Header>
            <View style={styles.columnContainer}>
                <View style={styles.column}>
                <Text>Kilometragem:</Text>
                <TextInput
                    style={styles.input}
                    value={formData.kilometragem}
                    onChangeText={(text) => handleInputChange('kilometragem', text)}
                    placeholder="Digite a kilometragem"
                />
                
                <Text>Combustível:</Text>
                <TextInput
                    style={styles.input}
                    value={formData.combustivel}
                    onChangeText={(text) => handleInputChange('combustivel', text)}
                    placeholder="Digite o combustível"
                />
                <View style={styles.inlineInputs}>
                    <View style={styles.inputContainer}>
                    <Text>Litros Abastecidos:</Text>
                    <TextInput
                        style={styles.smallInput}
                        value={formData.litros}
                        onChangeText={(text) => handleInputChange('litros', text)}
                        placeholder="Digite os litros"
                    />
                    </View>

                    <View style={styles.inputContainer}>
                    <Text>Preço p/ LITRO:</Text>
                    <TextInput
                    style={styles.input}
                    value={formData.preco}
                    onChangeText={(text) => handleInputChange('preco', text)}
                    placeholder="Digite o preço"
                />

                </View>
                </View>

                <View style={styles.inlineInputs}>
                <View style={styles.inputContainer}>
                <Text>Veículo:</Text>
                <TextInput
                    style={styles.input}
                    value={formData.veiculo}
                    onChangeText={(text) => handleInputChange('veiculo', text)}
                    placeholder="Digite o veículo"
                />
                </View>
                <View style={styles.inputContainer}>
                <Text>Total R$:</Text>
                <Text>{formData.total}</Text>
                </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={submitForm}>
                    <Text style={styles.buttonText}>Enviar para API</Text>
                </TouchableOpacity>
                
                </View>
                <View style={styles.column}>
                {                  
                    <MapGeolocation></MapGeolocation>          
                }
            </View>
        </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    columnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        flex: 1,
      },
      column: {
        flex: 1,
        marginRight: 16,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
      },
      inlineInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      inputContainer: {
        flex: 1,
        marginRight: 10,
      },
      smallInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
      },
      button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
      },
  });