"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WinterOrb extends UnimplementedCard {
  constructor (game) {
    super(game, "Winter Orb", "Eternal Masters", "EMA");
  }
}

module.exports = WinterOrb;
