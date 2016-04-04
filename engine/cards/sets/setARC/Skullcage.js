"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skullcage extends Card {
  constructor(game) {
    super(game, "Skullcage", "Archenemy", "ARC");
  }
}

module.exports = Skullcage;
