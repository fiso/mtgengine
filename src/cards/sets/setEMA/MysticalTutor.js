"use strict";
const Constants = require ("../../../Constants");
const MysticalTutorBase = require("../set6ED/MysticalTutor");

class MysticalTutor extends MysticalTutorBase {
  constructor (game) {
    super(game, "Mystical Tutor", "Eternal Masters", "EMA");
  }
}

module.exports = MysticalTutor;
