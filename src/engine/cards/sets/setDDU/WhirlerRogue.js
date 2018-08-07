"use strict";
const Constants = require ("../../../Constants");
const WhirlerRogueBase = require("../setC18/WhirlerRogue");

class WhirlerRogue extends WhirlerRogueBase {
  constructor (game) {
    super(game, "Whirler Rogue", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = WhirlerRogue;
