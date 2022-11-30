import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { horizontalScale, verticalScale, moderateScale } from '../responsiveFile/Metrics';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity>
            <Image source={require('../assets/sidenavigation.png')} resizeMode='cover' style={{width:30,height:30}}></Image>
        </TouchableOpacity>
            <Text style={{fontSize:moderateScale(23), fontWeight:'700', color:"black"}}>MyIslam.Org</Text>
            <View style={{width:horizontalScale(40), height:verticalScale(40), borderWidth:2, borderColor:"red", borderRadius:moderateScale(40),alignItems:"center", justifyContent:"center"}}>
                <TouchableOpacity>
            <Image source={require('../assets/profile.png')} resizeMode='contain' style={{width:horizontalScale(40),height:verticalScale(40)}}></Image>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.headerDownImage}>
                <Image source={require('../assets/quran.png')} resizeMode='contain' style={{width:horizontalScale(130),height:verticalScale(130)}}></Image>
        </View>
        <View style={styles.main}>
            <View style={styles.lastRead}>
                <View style={styles.lastreadfirst}>
                    <Text >Last Read</Text>
                    <Text>Ar-Baqra</Text>
                    <Text>VerseNo:1</Text>
                    <Text>Goto  </Text>

                </View>
                <View style={styles.lastreadtwo}>
                <Image source={require('../assets/lantern.png')}></Image>
                </View>
            </View>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1,borderWidth:2}}>
                        <View style={styles.Quran}>
                        </View>
                        <View style={styles.Tajweed}></View>
                    </View>
                    <View style={{flex:1,borderWidth:2}}>
                        <View style={styles.Memorize}></View>
                        <View style={styles.MyNotes}></View>
                    </View>
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#AAA",
        padding:horizontalScale(10),
    },
    Header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    headerDownImage:{
        marginTop:verticalScale(15),
        marginBottom:verticalScale(15),
        borderWidth:1,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        // width:horizontalScale('100),
        backgroundColor:"red"       
    },
    main:{
        flex:3,
        borderWidth:1,
        borderColor:"red",
    },
    lastRead:{
        flexDirection:'row',
        padding:30,
        justifyContent:"space-between",
        backgroundColor:"lightgreen",
        padding:horizontalScale(10),
        borderRadius:30,
        height:verticalScale(130)
        
    },
    lastreadfirst:{
    },
    lastreadtwo:{
        width:
    },
    Quran:{
        flex:1,
    }
})