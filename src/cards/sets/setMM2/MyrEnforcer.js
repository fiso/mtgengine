"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Enforcer", "Modern Masters 2015", "MM2");
  }
}

module.exports = MyrEnforcer;
