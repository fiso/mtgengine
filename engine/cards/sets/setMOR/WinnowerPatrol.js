"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WinnowerPatrol extends Card {
  constructor(game) {
    super(game, "Winnower Patrol", "Morningtide", "MOR");
  }
}

module.exports = WinnowerPatrol;
