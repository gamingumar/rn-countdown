/*
 * File: styles.ts
 * Project: rn-countdown
 * File Created: Tuesday, 15th December 2020 7:20:02 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 15th December 2020 7:20:02 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  timerStyle: {
    fontSize: 120,
    color: "black",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  speedStyle: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },
  speedContainer: {
    borderWidth: 2.5,
    borderRadius: 3,
    borderColor: "black",
    padding: 5,
    width: 70,
    margin: 10,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#4AAF97",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },
});