"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RisenSanctuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Risen Sanctuary", "Return to Ravnica", "RTR");
  }
}

module.exports = RisenSanctuary;
