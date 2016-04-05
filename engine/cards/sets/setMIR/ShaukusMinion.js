"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShaukusMinion extends UnimplementedCard {
  constructor(game) {
    super(game, "Shauku's Minion", "Mirage", "MIR");
  }
}

module.exports = ShaukusMinion;
