"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaScrew extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Screw", "Unhinged", "UNH");
  }
}

module.exports = ManaScrew;
