"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JunglePatrol extends Card {
  constructor(game) {
    super(game, "Jungle Patrol", "Mirage", "MIR");
  }
}

module.exports = JunglePatrol;
