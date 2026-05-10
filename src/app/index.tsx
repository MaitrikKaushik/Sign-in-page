import { Image, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = () => {
  const [name, setName] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          height: 50,
          width: 50
        }}
      />

      <Text style={{

        fontWeight: "bold",
        fontSize: 50
      }}>
        Sign In
      </Text>
      <Text>
        Let's experience the joy of telecare AI.
      </Text>
      <Text style={{
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 30
      }}>
        Email:
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 300,
          marginTop: 5,
          borderRadius: 20,
          padding: 10

        }}
        placeholder="Enter your Email"
        value={name}
        onChangeText={setName}
      />
      <Text style={{
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 30
      }}>
        Password:
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "black",
          borderWidth: 1,
          width: 300,
          marginTop: 5,
          borderRadius: 20,
          padding: 10

        }}
        placeholder="Enter your Password"
        value={name}
        onChangeText={setName}
      />
      <View style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 5
      }}>
        <View style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 8,
          borderRadius: 50,
        }}>
          <Image
            source={require("@/assets/images/facebook.png")}
            style={{
              height: 24,
              width: 24,
            }}

          />
        </View>
        <View style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 8,
          borderRadius: 50,
        }}>
          <Image
            source={require("@/assets/images/twitter.png")}
            style={{
              height: 24,
              width: 24,
            }}

          />
        </View>
        <View style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 8,
          borderRadius: 50,
        }}>
          <Image
            source={require("@/assets/images/instagram.png")}
            style={{
              height: 24,
              width: 24,
            }}

          />
        </View>
      </View>
      <View style={{
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 40,
        backgroundColor: "green",
        borderRadius: 20,
      }}  >
        <Text style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}>Sign In</Text>
      </View>

      <View style={{
        flexDirection: "row",
        gap: 5,
        marginTop: 20,
        justifyContent: "center",
      }}>
        <Text>Don't have an account?</Text>
        <Text
          onPress={() => console.log("Sign Up")}
          style={{
            color: "blue",
            fontWeight: "bold",
          }}>
          Sign Up</Text>
      </View>

      <View style={{
        marginTop: 10,
        justifyContent: "center",
      }}>
        <Text
          onPress={() => console.log("Sign Up")}
          style={{
            color: "blue",
            fontWeight: "bold",
          }}>
          Forgot Password ? Click here !!</Text>
      </View>


    </View >


  )
}

export default HomeScreen;

const styles = StyleSheet.create({})
