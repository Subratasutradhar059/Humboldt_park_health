import * as React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Homepage from '../Screens/HomePage';
import Directory from '../Screens/Directory';
import Favorites from '../Screens/Favorites';
import Account from '../Screens/Account';
import Theme from '../Components/common/Theme';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      //   barStyle={{
      //     position: 'absolute',
      //     backgroundColor: Theme.secondary,
      //     borderRadius: 50,
      //     bottom: 10,
      //     marginHorizontal: 15,
      //     height: 30,
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     paddingHorizontal: 10,
      //   }}
      screenOptions={{
        headerShown: false,
      }}

      // labeled={false}
    >
      {/* <Tab.Screen name="Homepage"
            component={Homepage}
              
                options={{
                    // tabBarLabel: () => { return null },
                    
                    // tabBarLabel: <Text style={{color:color}}>ksjdhfjsjg</Text> ,
                   
                    
                   

                    tabBarIcon: ({ color }) => (
                        <Octicons name="arrow-switch" color={color} size={20} />
                       
                        
                    ),
                   
                }}   /> */}

      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused == true ? (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      alignItems: 'center',
                      flexDirection: 'column',
                      borderTopLeftRadius: 25,
                      height: Platform.OS == 'ios' ? 50 : null,
                      backgroundColor: Theme.primary,
                      marginTop: Platform.OS == 'ios' ? 30 : null,
                    }}>
                    <Octicons
                      color={Theme.white}
                      name="arrow-switch"
                      size={20}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        color: Theme.white,
                        letterSpacing: 1,
                        textAlign: 'center',
                        lineHeight: 20,
                        // marginLeft: 10,
                      }}>
                      Referrals
                    </Text>
                  </TouchableOpacity>
                ) : (
                  //    <AntDesign name="home" color={Theme.chocolate} style={Platform.OS =='ios'?{marginTop:30,height:50,padding:10}:null} size={25} />
                  <>
                    <Octicons name="arrow-switch" size={20} />
                    <View style={{marginTop: 5}}>
                      <Text
                        style={{
                          fontSize: 12,
                          // color: Theme.white,
                          letterSpacing: 1,
                          textAlign: 'center',
                          lineHeight: 20,
                          // marginLeft: 10,
                        }}>
                        Referrals
                      </Text>
                    </View>
                  </>
                )}
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="Directory"
        component={Directory}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused == true ? (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      alignItems: 'center',
                      flexDirection: 'column',

                      height: Platform.OS == 'ios' ? 50 : null,
                      backgroundColor: Theme.primary,
                      marginTop: Platform.OS == 'ios' ? 30 : null,
                    }}>
                    <AntDesign name="bars" size={25} color={Theme.white} />
                    <Text
                      style={{
                        fontSize: 13,
                        color: Theme.white,
                        letterSpacing: 1,
                        textAlign: 'center',
                        lineHeight: 20,
                        // marginLeft: 10,
                      }}>
                      Directory
                    </Text>
                  </TouchableOpacity>
                ) : (
                  //    <AntDesign name="home" color={Theme.chocolate} style={Platform.OS =='ios'?{marginTop:30,height:50,padding:10}:null} size={25} />
                  <>
                    <AntDesign name="bars" size={25} />
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          // color: Theme.white,
                          letterSpacing: 1,
                          textAlign: 'center',
                          lineHeight: 20,
                          //   marginLeft: 10,
                        }}>
                        Directory
                      </Text>
                    </View>
                  </>
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused == true ? (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      alignItems: 'center',
                      flexDirection: 'column',
                      height: Platform.OS == 'ios' ? 50 : null,
                      backgroundColor: Theme.primary,
                      marginTop: Platform.OS == 'ios' ? 30 : null,
                    }}>
                    <Entypo
                      name="star-outlined"
                      color={Theme.white}
                      size={25}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: Theme.white,
                        letterSpacing: 1,
                        textAlign: 'center',
                        lineHeight: 20,
                        // marginLeft: 10,
                      }}>
                      Favorites
                    </Text>
                  </TouchableOpacity>
                ) : (
                  //    <AntDesign name="home" color={Theme.chocolate} style={Platform.OS =='ios'?{marginTop:30,height:50,padding:10}:null} size={25} />
                  <>
                    <Entypo name="star-outlined" size={25} />
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          // color: Theme.white,
                          letterSpacing: 1,
                          textAlign: 'center',
                          lineHeight: 20,
                          marginLeft: 10,
                        }}>
                        Favorites
                      </Text>
                    </View>
                  </>
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused == true ? (
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      alignItems: 'center',
                      flexDirection: 'column',
                      borderTopRightRadius: 25,
                      height: Platform.OS == 'ios' ? 50 : null,
                      backgroundColor: Theme.primary,
                      marginTop: Platform.OS == 'ios' ? 30 : null,
                    }}>
                    <MaterialCommunityIcons
                      name="account-cog-outline"
                      size={25}
                      color={Theme.white}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        color: Theme.white,
                        letterSpacing: 1,
                        textAlign: 'center',
                        lineHeight: 20,
                        marginLeft: 10,
                      }}>
                      Account
                    </Text>
                  </TouchableOpacity>
                ) : (
                  //    <AntDesign name="home" color={Theme.chocolate} style={Platform.OS =='ios'?{marginTop:30,height:50,padding:10}:null} size={25} />
                  <>
                    <MaterialCommunityIcons
                      name="account-cog-outline"
                      size={25}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          // color: Theme.white,
                          letterSpacing: 1,
                          textAlign: 'center',
                          lineHeight: 20,
                          marginLeft: 10,
                        }}>
                        Account
                      </Text>
                    </View>
                  </>
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
