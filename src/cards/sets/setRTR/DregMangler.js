"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DregMangler extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreg Mangler", "Return to Ravnica", "RTR");
  }
}

module.exports = DregMangler;
