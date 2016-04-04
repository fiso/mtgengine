"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticalTutorBase = require("../set6ED/MysticalTutor.js");

class MysticalTutor extends MysticalTutorBase {
  constructor(game) {
    super(game, "Mystical Tutor", "Mirage", "MIR");
  }
}

module.exports = MysticalTutor;
