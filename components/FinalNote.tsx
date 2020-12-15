/*
 * File: FinalNote.tsx
 * Project: rn-countdown
 * File Created: Tuesday, 15th December 2020 7:19:00 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 15th December 2020 7:19:00 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */


import * as React from 'react';
import {Text, View} from 'react-native';
import * as Animatable from "react-native-animatable";
import { styles } from '../styles';


export const FinalNote = ({ counter }: { counter: Number }) => {
  const styling = [
    styles.textStyle,
    { fontStyle: "italic", fontWeight: "bold" },
  ];


  const msg = counter < 1 ? "Time's up!" : "More than halfway there!";

  const blink = counter < 11 && counter > 0;
  const visible = counter < 20;

  return (
    <View style={{ opacity: visible ? 1 : 0 }}>
      {blink ? (
        <Animatable.Text
          animation="fadeIn"
          iterationCount={10}
          useNativeDriver
          direction="alternate"
          style={styling}
        >
          {msg}
        </Animatable.Text>
      ) : (
        <Text style={styling}>{msg}</Text>
      )}
    </View>
  );

};