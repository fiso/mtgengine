"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Archer", "Masters Edition", "MED");
  }
}

module.exports = CentaurArcher;
