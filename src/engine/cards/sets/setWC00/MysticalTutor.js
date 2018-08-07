"use strict";
const Constants = require ("../../../Constants");
const MysticalTutorBase = require("../setSS1/MysticalTutor");

class MysticalTutor extends MysticalTutorBase {
  constructor (game) {
    super(game, "Mystical Tutor", "World Championship Decks 2000", "WC00");
  }
}

module.exports = MysticalTutor;
