"use strict";
const Constants = require ("../../../Constants");
const MysticalTutorBase = require("../set6ED/MysticalTutor");

class MysticalTutor extends MysticalTutorBase {
  constructor(game) {
    super(game, "Mystical Tutor", "From the Vault: Exiled", "V09");
  }
}

module.exports = MysticalTutor;
