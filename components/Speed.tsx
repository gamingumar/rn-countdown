/*
 * File: Speed.tsx
 * Project: rn-countdown
 * File Created: Tuesday, 15th December 2020 7:22:03 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 15th December 2020 7:22:03 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

interface ISpeed {
  onPress: () => void;
  speed: String;
  selected: Boolean;
}
export const Speed = ({ onPress, speed, selected }: ISpeed) => {
  const backgroundColor = selected ? "#616161" : "white";
  const color = selected ? "white" : "black";
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.speedContainer, { backgroundColor }]}>
        <Text style={[styles.speedStyle, { color }]}>{speed}X</Text>
      </View>
    </TouchableOpacity>
  );
};
