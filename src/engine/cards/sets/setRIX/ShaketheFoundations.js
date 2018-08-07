"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShaketheFoundations extends UnimplementedCard {
  constructor (game) {
    super(game, "Shake the Foundations", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ShaketheFoundations;
