"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitansPresence extends UnimplementedCard {
  constructor (game) {
    super(game, "Titan's Presence", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TitansPresence;
