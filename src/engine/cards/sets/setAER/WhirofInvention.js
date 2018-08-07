"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhirofInvention extends UnimplementedCard {
  constructor (game) {
    super(game, "Whir of Invention", "Aether Revolt", "AER");
  }
}

module.exports = WhirofInvention;
