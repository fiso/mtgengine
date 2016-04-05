"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartialLaw extends UnimplementedCard {
  constructor(game) {
    super(game, "Martial Law", "Return to Ravnica", "RTR");
  }
}

module.exports = MartialLaw;
