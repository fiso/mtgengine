"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorderPatrol extends Card {
  constructor(game) {
    super(game, "Border Patrol", "Judgment", "JUD");
  }
}

module.exports = BorderPatrol;
