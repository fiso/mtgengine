"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DelayingShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Delaying Shield", "Odyssey", "ODY");
  }
}

module.exports = DelayingShield;
