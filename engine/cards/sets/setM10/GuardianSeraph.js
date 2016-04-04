"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianSeraph extends Card {
  constructor(game) {
    super(game, "Guardian Seraph", "Magic 2010", "M10");
  }
}

module.exports = GuardianSeraph;
