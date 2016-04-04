"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavensRun extends UnimplementedCard {
  constructor(game) {
    super(game, "Raven's Run", "Planechase", "HOP");
  }
}

module.exports = RavensRun;
