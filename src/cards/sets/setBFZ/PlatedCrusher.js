"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedCrusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Crusher", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PlatedCrusher;
