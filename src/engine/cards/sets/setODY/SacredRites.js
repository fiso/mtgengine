"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredRites extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Rites", "Odyssey", "ODY");
  }
}

module.exports = SacredRites;
