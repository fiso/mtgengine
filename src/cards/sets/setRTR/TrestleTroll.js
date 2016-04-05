"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrestleTroll extends UnimplementedCard {
  constructor(game) {
    super(game, "Trestle Troll", "Return to Ravnica", "RTR");
  }
}

module.exports = TrestleTroll;
