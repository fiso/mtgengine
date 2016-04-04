"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindriderPatrol extends Card {
  constructor(game) {
    super(game, "Windrider Patrol", "Battle for Zendikar", "BFZ");
  }
}

module.exports = WindriderPatrol;
