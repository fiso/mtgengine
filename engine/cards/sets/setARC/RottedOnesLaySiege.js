"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottedOnesLaySiege extends UnimplementedCard {
  constructor(game) {
    super(game, "Rotted Ones, Lay Siege", "Archenemy", "ARC");
  }
}

module.exports = RottedOnesLaySiege;
