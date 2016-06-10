"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmotheringAbomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Smothering Abomination", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SmotheringAbomination;
