"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wrangle extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrangle", "Aether Revolt", "AER");
  }
}

module.exports = Wrangle;
