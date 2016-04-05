"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkroanMastiff extends UnimplementedCard {
  constructor(game) {
    super(game, "Akroan Mastiff", "Journey into Nyx", "JOU");
  }
}

module.exports = AkroanMastiff;
