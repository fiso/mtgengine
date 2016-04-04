"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MakindiPatrol extends Card {
  constructor(game) {
    super(game, "Makindi Patrol", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MakindiPatrol;
