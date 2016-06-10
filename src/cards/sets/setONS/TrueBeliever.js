"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrueBeliever extends UnimplementedCard {
  constructor (game) {
    super(game, "True Believer", "Onslaught", "ONS");
  }
}

module.exports = TrueBeliever;
