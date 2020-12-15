import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { FinalNote } from "./components/FinalNote";
import { Speed } from "./components/Speed";

const SPEEDS = [1000, 500, 100];

export default function App() {
  const [paused, setPaused] = useState(true);
  const [input, setInput] = useState("2");
  const [minutes, setMinutes] = useState(2);
  const [counter, setCounter] = useState(minutes * 60); // number of seconds
  const [speed, setSpeed] = useState(1000);

  const icon = !paused ? "pause" : "play";

  const _onPlayOrPause = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCounter((counter) => (counter > 0 ? counter - 1 : 0));
      }
    }, speed);
    return () => clearInterval(interval);
  }, [paused, speed, minutes]);

  useEffect(() => {
    if (counter < 1 && !paused) {
      setPaused(true);
    }
  }, [counter]);

  const _changeSpeed = (speed: number) => {
    setSpeed(speed);
  };

  const _start = () => {
    setMinutes(+input);
    setCounter(+input * 60);
    setPaused(false);
    Keyboard.dismiss();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar style="auto" />

      <View style={styles.row}>
        <Text style={styles.textStyle}>Countdown: </Text>
        <TextInput
          style={{
            height: 40,
            width: 160,
            borderColor: "gray",
            borderWidth: 1,
            padding: 5,
          }}
          onChangeText={(text) => setInput(text)}
          value={input}
          placeholder="(Min)"
          keyboardType="number-pad"
        />
        <TouchableOpacity onPress={_start}>
          <View style={styles.btn}>
            <Text style={{ color: "white", fontWeight: "400" }}>
              {paused ? "RE START" : "START"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <FinalNote counter={counter} total={minutes*60} />

      <View style={styles.row}>
        <Text
          style={[styles.timerStyle, { color: counter < 20 ? "red" : "black" }]}
        >
          {new Date(counter * 1000).toISOString().substr(14, 5)}
        </Text>

        <TouchableOpacity onPress={_onPlayOrPause}>
          <Ionicons
            name={`md-${icon}-circle-outline`}
            size={60}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Speed
          onPress={() => _changeSpeed(SPEEDS[0])}
          speed="1"
          selected={speed === SPEEDS[0]}
        />
        <Speed
          onPress={() => _changeSpeed(SPEEDS[1])}
          speed="1.5"
          selected={speed === SPEEDS[1]}
        />
        <Speed
          onPress={() => _changeSpeed(SPEEDS[2])}
          speed="2"
          selected={speed === SPEEDS[2]}
        />
      </View>
    </ScrollView>
  );
}
