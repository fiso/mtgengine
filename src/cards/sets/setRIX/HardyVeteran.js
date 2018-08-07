"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HardyVeteran extends UnimplementedCard {
  constructor (game) {
    super(game, "Hardy Veteran", "Rivals of Ixalan", "RIX");
  }
}

module.exports = HardyVeteran;
