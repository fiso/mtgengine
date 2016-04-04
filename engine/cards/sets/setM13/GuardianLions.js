"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianLions extends Card {
  constructor(game) {
    super(game, "Guardian Lions", "Magic 2013", "M13");
  }
}

module.exports = GuardianLions;
