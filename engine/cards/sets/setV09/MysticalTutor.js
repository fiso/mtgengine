"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticalTutorBase = require("../set6ED/MysticalTutor.js");

class MysticalTutor extends MysticalTutorBase {
  constructor(game) {
    super(game, "Mystical Tutor", "From the Vault: Exiled", "V09");
  }
}

module.exports = MysticalTutor;
