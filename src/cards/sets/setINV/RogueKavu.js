"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RogueKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue Kavu", "Invasion", "INV");
  }
}

module.exports = RogueKavu;
