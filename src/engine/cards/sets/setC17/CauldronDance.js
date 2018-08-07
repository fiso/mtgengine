"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CauldronDance extends UnimplementedCard {
  constructor (game) {
    super(game, "Cauldron Dance", "Commander 2017", "C17");
  }
}

module.exports = CauldronDance;
