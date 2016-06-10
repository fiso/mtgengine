"use strict";
const Constants = require ("../../../Constants");
const MysticalTutorBase = require("../set6ED/MysticalTutor");

class MysticalTutor extends MysticalTutorBase {
  constructor (game) {
    super(game, "Mystical Tutor", "Mirage", "MIR");
  }
}

module.exports = MysticalTutor;
