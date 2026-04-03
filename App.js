import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const Tab = createBottomTabNavigator();

// Screens
const SearchScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>🔍 Search</Text>
    <Text style={styles.subtext}>Find friends and content</Text>
  </View>
);

const NotificationsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>🔔 Notifications</Text>
    <Text style={styles.subtext}>See your latest updates</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>👤 Profile</Text>
    <Text style={styles.subtext}>Your personal information</Text>
  </View>
);

// Custom Tab Button Component
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
    }}
    onPress={onPress}
    activeOpacity={0.7}
  >
    {children}
  </TouchableOpacity>
);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" translucent={false} />
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarButton: (props) => <CustomTabBarButton {...props} />,
              tabBarIcon: ({ focused, color, size }) => {
                const icons = {
                  Home: '🏠',
                  Search: '🔍',
                  Add: '➕',
                  Notifications: '🔔',
                  Profile: '👤',
                };
                return (
                  <Text style={{ fontSize: 24, opacity: focused ? 1 : 0.6 }}>
                    {icons[route.name]}
                  </Text>
                );
              },
              tabBarActiveTintColor: '#1877F2',
              tabBarInactiveTintColor: '#65676B',
              tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: '500',
                marginBottom: Platform.OS === 'android' ? 4 : 0,
              },
              tabBarStyle: {
                backgroundColor: '#FFFFFF',
                borderTopWidth: 1,
                borderTopColor: '#E4E6EB',
                height: Platform.OS === 'android' ? 65 : 70,
                paddingBottom: Platform.OS === 'android' ? 6 : 8,
                paddingTop: Platform.OS === 'android' ? 6 : 5,
                position: 'relative',
              },
              tabBarItemStyle: {
                paddingVertical: Platform.OS === 'android' ? 4 : 0,
              },
              headerStyle: {
                backgroundColor: '#FFFFFF',
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTitleStyle: {
                color: '#1877F2',
                fontWeight: 'bold',
                fontSize: 22,
              },
              headerTitleAlign: 'center',
            })}
          >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ title: 'Facebook' }}
            />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Add" component={CreatePostScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877F2',
  },
  subtext: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 10,
  },
});