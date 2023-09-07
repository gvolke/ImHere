import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style'

export function Home() {
    function handleParticipantAdd() {
        console.log("Você clicou no botão de adicionar")
    }

    return (
        <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do Evento
        </Text>

        <Text style={styles.eventDate}>
            Quarta, 6 de Novembro de 2022
        </Text>

        <TextInput 
            style={styles.input}
            placeholder='Nome do Participante'
            placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
        </View>    
    )
}