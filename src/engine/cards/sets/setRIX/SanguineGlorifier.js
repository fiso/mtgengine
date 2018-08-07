"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanguineGlorifier extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanguine Glorifier", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SanguineGlorifier;
