"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardDuty extends UnimplementedCard {
  constructor (game) {
    super(game, "Guard Duty", "Iconic Masters", "IMA");
  }
}

module.exports = GuardDuty;
