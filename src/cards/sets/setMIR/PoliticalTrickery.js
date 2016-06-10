"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoliticalTrickery extends UnimplementedCard {
  constructor (game) {
    super(game, "Political Trickery", "Mirage", "MIR");
  }
}

module.exports = PoliticalTrickery;
