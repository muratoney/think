import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from "@/constants/images"
import { icons } from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused){
        return(
            <ImageBackground
                // source = {images.highlight}
                className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center'>
                <Image source={icon} tintColor="#00B8EA" className='size-7'/>
                {/* <Text className="text-secondary text-base font-semibold ml-2">{title}</Text> */}
            </ImageBackground>)
    }
    else {
        return(
            <View className='size-full justify-center items-center mt-4 rounded-full'>
                <Image source={icon}
                tintColor="#000000" className='size-7'/>
            </View>
        )
    }
    
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle:{
                backgroundColor: '#fff',
                height: 80,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 0,
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                title: 'Home',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = {focused} 
                        icon={icons.home} 
                        title="Home"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                headerShown: false,
                title: 'Search',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = {focused} 
                        icon={icons.search} 
                        title="Search"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="post"
            options={{
                headerShown: false,
                title: 'Post',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = {focused} 
                        icon={icons.post} 
                        title="Post"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                headerShown: false,
                title: 'Profile',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = {focused} 
                        icon={icons.user} 
                        title="Profile"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
                headerShown: false,
                title: 'Settings',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = {focused} 
                        icon={icons.settings} 
                        title="Settings"
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout