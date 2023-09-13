// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// let timer = null;
// let ss = 0;
// let mm = 0;
// let hh = 0;

// export default function App() {

//   const [display, setDisplay] = useState('00:00:00');
//   const [botaoText, setBotaoText] = useState('Iniciar');
//   const [lastTime, setLastTime] = useState(null);

//   function start() {
//     if (timer !== null) {
//       clearInterval(timer);
//       timer = null;
//       setBotaoText('Iniciar');
//     } else {
//       timer = setInterval(() => {
//         ss++;

//         if (ss === 60) {
//           ss = 0;
//           mm++;
//         }
//         if (mm === 60) {
//           mm = 0;
//           hh++;
//         }

//         let format = (hh < 10 ? '0' : '') + hh
//           + ':' + (mm < 10 ? '0' : '') + mm
//           + ':' + (ss < 10 ? '0' : '') + ss;

//         setDisplay(format);
//       }, 10);

//       setBotaoText('Parar');
//     }
//   }

//   function clear() {
//     if (timer !== null) {
//       clearInterval(timer);
//       timer = null;
//       setBotaoText('Iniciar')
//     }

//     if (display !== "00:00:00") {
//       setLastTime([display, ...lastTime]);
//     }

//     setDisplay("00:00:00");
//     ss = 0;
//     mm = 0;
//     hh = 0;


//     setLastTime(display);

//     setDisplay('00:00:00');
//     setBotaoText('Iniciar');
    
//   }



//   return (
//     <View style={styles.container}>
//       <View>
//         <Image
//           style={styles.image}
//           source={require('./assets/cronometroimg.png')}
//         />
//         <Text style={styles.displayText}>{display}</Text>
//       </View>

//       <View style={styles.buttons}>
//         <TouchableOpacity 
//         style={[styles.button]}
//          onPress={start}> 
//         <Text style={styles.buttonText}>{botaoText}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//         style={[styles.button]} 
//         onPress={clear}>
//         <Text style={styles.buttonText}>Limpar</Text>
//         </TouchableOpacity>

       
//       </View>

//       {/* <View style={styles.last}>
//         <Text style={styles.last}>Ultimo tempo salvo:</Text>
//         {timesSave.map((tempo, index) => (
//           <Text key={index} style={[styles.historic, styles.historicItem]}>{`Tempo ${index + 1}: ${tempo}`}</Text>
//         ))}
//       </View> */}

//       <View style={styles.last}>
//         <Text style={styles.last}> {lastTime ? 'Ultimo tempo:' + lastTime: ''}

//         </Text>

//       </View>



//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#b8a6d8',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     height: 250,
//     width: 250

//   },
//   displayText: {
//       fontSize: 30,
//       textAlign: 'center',
//   },
//   buttons:{
//     flexDirection: 'row',
//     gap: 20,
//     marginTop: 45,
//   },
//   button:{
//     backgroundColor: 'white',
//     borderRadius: 100,
//     paddingTop: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     width: 120,
//     marginBottom: 20,
//     borderColor: 'white',
//     borderWidth: 1,
//   },
//   buttonText:{

//   },
 
//   last:{
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 10,
//   },

//   historic:{
//     fontSize: 25,
//     marginTop: 2,
//     paddingHorizontal: 25,
//     textAlign:'center',
//     color:'white',
//   },
//   historicItem: {
//       fontSize: 20,
//       marginBottom: 5,
//   }

// });
