"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Healer", "Return to Ravnica", "RTR");
  }
}

module.exports = CentaurHealer;
