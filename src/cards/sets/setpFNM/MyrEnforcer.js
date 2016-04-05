"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrEnforcer extends UnimplementedCard {
  constructor(game) {
    super(game, "Myr Enforcer", "Friday Night Magic", "pFNM");
  }
}

module.exports = MyrEnforcer;
