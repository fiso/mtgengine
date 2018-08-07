"use strict";
const Constants = require ("../../../Constants");
const MysticalTutorBase = require("../setSS1/MysticalTutor");

class MysticalTutor extends MysticalTutorBase {
  constructor (game) {
    super(game, "Mystical Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MysticalTutor;
