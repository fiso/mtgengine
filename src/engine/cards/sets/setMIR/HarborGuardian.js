"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarborGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Harbor Guardian", "Mirage", "MIR");
  }
}

module.exports = HarborGuardian;
