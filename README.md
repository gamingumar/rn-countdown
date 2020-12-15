# rn-countdown
Countdown timer app in React Native using React Hooks!


- The user should be able to enter a # of minutes (positive integer) and click a “Start”
button to initialize the countdown.
- Timer format: MM:SS  
- The user should be able to pause & resume the countdown using pause / resume
  buttons  
  While the countdown timer is active, the user should be able to speed up / slow     down t he speed at the following rates:
- ○ 1.0X (normal speed, selected by default)
- ○ 1.5X
- ○ 2X   
- When half of the selected duration has been passed, display a string of text above the countdown timer reading: “More than halfway there!”
- ○ When the countdown timer reaches 0, this text should change to: “Time’s up!”  
- When the countdown is within 20 seconds of ending, the countdown timer text should turn red.  
- At 10 seconds, the text should start blinking.  
- Functionality should be appropriately divided into well-defined components.