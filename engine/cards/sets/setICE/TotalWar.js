"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TotalWar extends UnimplementedCard {
  constructor(game) {
    super(game, "Total War", "Ice Age", "ICE");
  }
}

module.exports = TotalWar;
