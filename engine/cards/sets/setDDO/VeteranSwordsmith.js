"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteranSwordsmith extends Card {
  constructor(game) {
    super(game, "Veteran Swordsmith", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = VeteranSwordsmith;
