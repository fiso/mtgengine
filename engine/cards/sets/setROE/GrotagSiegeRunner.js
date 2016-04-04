"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrotagSiegeRunner extends Card {
  constructor(game) {
    super(game, "Grotag Siege-Runner", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GrotagSiegeRunner;
