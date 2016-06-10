"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedWood extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Wood", "Commander 2015", "C15");
  }
}

module.exports = TaintedWood;
