"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Takara extends Card {
  constructor(game) {
    super(game, "Takara", "Vanguard", "VAN");
  }
}

module.exports = Takara;
