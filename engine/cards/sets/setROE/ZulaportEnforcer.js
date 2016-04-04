"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZulaportEnforcer extends Card {
  constructor(game) {
    super(game, "Zulaport Enforcer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ZulaportEnforcer;
