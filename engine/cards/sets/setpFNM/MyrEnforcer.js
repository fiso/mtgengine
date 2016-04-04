"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrEnforcer extends Card {
  constructor(game) {
    super(game, "Myr Enforcer", "Friday Night Magic", "pFNM");
  }
}

module.exports = MyrEnforcer;
