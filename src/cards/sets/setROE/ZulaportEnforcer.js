"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZulaportEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Zulaport Enforcer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ZulaportEnforcer;
