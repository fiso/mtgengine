"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedWood extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Wood", "Commander Anthology", "CMA");
  }
}

module.exports = TaintedWood;
