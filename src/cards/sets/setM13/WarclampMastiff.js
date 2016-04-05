"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarclampMastiff extends UnimplementedCard {
  constructor(game) {
    super(game, "Warclamp Mastiff", "Magic 2013", "M13");
  }
}

module.exports = WarclampMastiff;
