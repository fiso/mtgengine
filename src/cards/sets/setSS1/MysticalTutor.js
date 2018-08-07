"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticalTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystical Tutor", "Signature Spellbook: Jace", "SS1");
  }
}

module.exports = MysticalTutor;
