import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class fraseDia extends Component {
  gerarFrase(){
    var frases = ["“Tome cuidado com suas palavras e você evitará muito sofrimento” (Provérbios 21.23 – NBV)",
                  "“Portanto, não tenham medo, pois vocês valem mais do que muitos passarinhos.” (Mateus 10. 31 – NTLH)",
                  "“Ao Senhor pertence a terra e tudo o que nela se contém, o mundo e os que nele habitam” (Salmo 24. 1 – RA)",
                  "“Feliz o homem que acha sabedoria, e o homem que adquire conhecimento” (Provérbios 3:13 – RA)",
                  "“Faze-me, SENHOR, conhecer os teus caminhos, ensina-me as tuas veredas. Guia-me na tua verdade e ensina-me, pois tu és o Deus da minha salvação, em quem eu espero todo o dia.” (Salmo 25:4-5 – RA)",
                  "“Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.” (Romanos 5. 8 – RA)",
                  "“Sempre que você procurarem o Senhor, vão encontrá-lo” (2 Crônicas 15.2 – NBV)",
                  "“…Não temas, crê somente.” (Marcos 5.36 – RA)",
                  "“O homem justo é como uma árvore cujos frutos devolvem a saúde e o vigor da vida. Quem é sábio leva outros para junto de Deus.” (Provérbios 11. 30 – Bíblia Viva)",
                  "“De tudo o que se tem ouvido, o fim é: Teme a Deus, e guarda os seus mandamentos; porque isto é o dever de todo o homem. Porque Deus há de trazer a juízo toda a obra, e até tudo o que está encoberto, quer seja bom, quer seja mau” (Eclesiastes 12:13-14 – RA)",
                  "“Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.” (Romanos 5. 8 – RA)"]

    var random = Math.floor(Math.random() * frases.length);

    alert(frases[random]);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
            <Text>Frase para você começar seu dia.</Text>
        </View>
        <TouchableOpacity onPress={() => this.gerarFrase()} style={styles.button}>
              <Text>Toque aqui!</Text>
        </TouchableOpacity >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  text:{alignItems: 'center'},
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    height: 50
  }
});
