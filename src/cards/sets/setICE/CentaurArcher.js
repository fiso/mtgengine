"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Archer", "Ice Age", "ICE");
  }
}

module.exports = CentaurArcher;
