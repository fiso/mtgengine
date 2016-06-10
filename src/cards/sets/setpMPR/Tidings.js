"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tidings extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidings", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Tidings;
