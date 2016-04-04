"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForceofNature extends Card {
  constructor(game) {
    super(game, "Force of Nature", "Beatdown Box Set", "BTD");
  }
}

module.exports = ForceofNature;
