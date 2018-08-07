"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CennsTactician extends UnimplementedCard {
  constructor (game) {
    super(game, "Cenn's Tactician", "Morningtide", "MOR");
  }
}

module.exports = CennsTactician;
