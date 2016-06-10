"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dynacharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Dynacharge", "Return to Ravnica", "RTR");
  }
}

module.exports = Dynacharge;
