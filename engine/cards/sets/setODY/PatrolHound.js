"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatrolHound extends Card {
  constructor(game) {
    super(game, "Patrol Hound", "Odyssey", "ODY");
  }
}

module.exports = PatrolHound;
