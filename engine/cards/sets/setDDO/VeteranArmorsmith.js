"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteranArmorsmith extends Card {
  constructor(game) {
    super(game, "Veteran Armorsmith", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = VeteranArmorsmith;
