"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticEnforcer extends Card {
  constructor(game) {
    super(game, "Mystic Enforcer", "Odyssey", "ODY");
  }
}

module.exports = MysticEnforcer;
