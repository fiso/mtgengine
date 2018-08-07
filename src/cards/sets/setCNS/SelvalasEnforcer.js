"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelvalasEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Selvala's Enforcer", "Conspiracy", "CNS");
  }
}

module.exports = SelvalasEnforcer;
