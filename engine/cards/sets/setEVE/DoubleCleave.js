"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleCleave extends UnimplementedCard {
  constructor(game) {
    super(game, "Double Cleave", "Eventide", "EVE");
  }
}

module.exports = DoubleCleave;
