import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Picker,
  TouchableOpacity,
  Button
} from 'react-native';

class App extends Component {

  state = {
    valor: 0,
    moeda1: 'CAD',
    moeda2: 'CAD',
    resultado: ''
  }

  validar = () => {
    const response = fetch(`https://api.exchangeratesapi.io/latest?base=` + this.state.moeda1 + `&symbols=` + this.state.moeda2)
      .then(response => response.json())
      .then(responseJson => {
        let valor = Object.values(responseJson.rates)
        let resultado = this.state.valor + " em " + this.state.moeda1 + "  é: " + valor[0] * this.state.valor + " em " + this.state.moeda2 + "!"
        this.setState({ resultado })
        alert(resultado)
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{ flexDirection: 'row' }, { flex: 1 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.texto}>Valor</Text>
            <TextInput
              placeholder='valor'
              value={this.state.valor}
              onChangeText={valor => this.setState({ valor })}
              style={styles.valor}
            ></TextInput>
          </View>
          <View style={{ flexDirection: 'column' }, { flex: 1 }}>
            <Text style={styles.texto}>Converter de:</Text>
            <Picker
              selectedValue={this.state.moeda1}
              style={{ width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ moeda1: itemValue })
              }>
              <Picker.Item label="CAD" value="CAD" />
              <Picker.Item label="HKD" value="HKD" />
              <Picker.Item label="ISK" value="ISK" />
              <Picker.Item label="PHP" value="PHP" />
              <Picker.Item label="DKK" value="DKK" />
              <Picker.Item label="HUF" value="HUF" />
              <Picker.Item label="CZK" value="CZK" />
              <Picker.Item label="RON" value="RON" />
              <Picker.Item label="AUD" value="AUD" />
              <Picker.Item label="BRL" value="BRL" />
              <Picker.Item label="PLN" value="PLN" />
              <Picker.Item label="BGN" value="BGN" />
              <Picker.Item label="NZD" value="NZD" />
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="EUR" value="EUR" />
            </Picker>
          </View>

          <View style={{ flexDirection: 'column' }, { flex: 1 }}>
            <Text style={styles.texto}>Converter para:</Text>
            <Picker
              selectedValue={this.state.moeda2}
              style={{ width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ moeda2: itemValue })
              }>
              <Picker.Item label="CAD" value="CAD" />
              <Picker.Item label="HKD" value="HKD" />
              <Picker.Item label="ISK" value="ISK" />
              <Picker.Item label="PHP" value="PHP" />
              <Picker.Item label="DKK" value="DKK" />
              <Picker.Item label="HUF" value="HUF" />
              <Picker.Item label="CZK" value="CZK" />
              <Picker.Item label="RON" value="RON" />
              <Picker.Item label="AUD" value="AUD" />
              <Picker.Item label="BRL" value="BRL" />
              <Picker.Item label="PLN" value="PLN" />
              <Picker.Item label="BGN" value="BGN" />
              <Picker.Item label="NZD" value="NZD" />
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="EUR" value="EUR" />
            </Picker>
            {/* <TouchableOpacity
              style={{backgroundColor: "#f56ff6"}, {alignContent: 'center'}, {alignSelf: 'center'} , {width: 200}, {height: 50}, {borderRadius: 20}}
              onPress={this.validar}
            >
              <Text style ={{fontSize: 30}}>Converter</Text>
            </TouchableOpacity> */}
          </View>
          <View style={{ flex: 1 }}>
            <Button title='Converter'
              onPress={this.validar}
              style={styles.botao}
            ></Button>
          </View>
        </View>
      </>
    );
  };
}
const styles = StyleSheet.create({
  texto: {
    fontWeight: 'bold',
    fontSize: 30

  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 4,
    paddingEnd: 5

  },
  botao: {
    height: 60,
    fontSize: 60,
    paddingVertical: 20,
    paddingHorizontal: 10,
  }

});

export default App;
