"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwabGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Swab Goblin", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SwabGoblin;
