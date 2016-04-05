"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StenchofEvil extends UnimplementedCard {
  constructor(game) {
    super(game, "Stench of Evil", "Ice Age", "ICE");
  }
}

module.exports = StenchofEvil;
