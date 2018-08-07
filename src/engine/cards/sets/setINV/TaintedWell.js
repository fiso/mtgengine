"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedWell extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Well", "Invasion", "INV");
  }
}

module.exports = TaintedWell;
