import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {

  const [display, setDisplay] = useState('00:00:00');
  const [botaoText, setBotaoText] = useState('Iniciar');
  const [lastTime, setLastTime] = useState(null);
  const [temposSalvos, setTemposSalvos] = useState([]);


  function start() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotaoText('Iniciar');
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss === 60) {
          ss = 0;
          mm++;
        }
        if (mm === 60) {
          mm = 0;
          hh++;
        }

        let format = (hh < 10 ? '0' : '') + hh
          + ':' + (mm < 10 ? '0' : '') + mm
          + ':' + (ss < 10 ? '0' : '') + ss;

        setDisplay(format);
      }, 100);

      setBotaoText('Parar');
    }
  }

  function clear() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotaoText('Iniciar')
    }

    if (display !== "00:00:00") {
      setLastTime([display, ...lastTime]);
    }

    setDisplay("00:00:00");
    ss = 0;
    mm = 0;
    hh = 0;


    const tempoAtual = display;
        setTemposSalvos([...temposSalvos, tempoAtual]);


    setDisplay('00:00:00');
    setBotaoText('Iniciar');
    
  }



  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('./assets/cronometroimg.png')}
        />
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity 
        style={[styles.button]}
         onPress={start}> 
        <Text style={styles.buttonText}>{botaoText}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.button,{ opacity: timer !== null ? 0.5 : 1 }]} 
        onPress={clear}>

        <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>

       
      </View>

     <View style={styles.historic}>
                <Text style={styles.historic}>Histórico:</Text>
                {temposSalvos.map((tempo, index) => (
                    <Text key={index} style={[styles.historic, styles.historicItem]}>{`Tempo ${index + 1}: ${tempo}`}</Text>
                ))}
            </View>



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dec9ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: 250

  },
  displayText: {
      fontSize: 30,
      textAlign: 'center',
  },
  buttons:{
    flexDirection: 'row',
    gap: 20,
    marginTop: 45,
  },
  button:{
    backgroundColor: '#a58ece',
    borderRadius: 100,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 120,
    marginBottom: 20,
    borderColor: '#402c63',
    borderWidth: 1,
  },
  buttonText:{
    color: 'white',
    alignSelf: 'center',
    fontWeight: "bold",
  },
 
  last:{
    fontSize: 16,
    marginBottom: 10,
  },

  historic:{
    fontSize: 18,
    marginTop: 2,
    paddingHorizontal: 25,
    textAlign:'center',
    color:'#402c63',
    fontWeight: "italic"
  },
  historicItem: {
      fontSize: 20,
      marginBottom: 5,
  }

});

