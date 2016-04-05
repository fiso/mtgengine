"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranArmorsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran Armorsmith", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = VeteranArmorsmith;
