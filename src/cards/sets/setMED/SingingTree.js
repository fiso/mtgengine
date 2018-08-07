"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SingingTree extends UnimplementedCard {
  constructor (game) {
    super(game, "Singing Tree", "Masters Edition", "MED");
  }
}

module.exports = SingingTree;
