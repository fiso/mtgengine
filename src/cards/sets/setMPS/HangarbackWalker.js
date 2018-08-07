"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HangarbackWalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Hangarback Walker", "Kaladesh Inventions", "MPS");
  }
}

module.exports = HangarbackWalker;
