"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RottingRats extends Card {
  constructor(game) {
    super(game, "Rotting Rats", "Conflux", "CON");
  }
}

module.exports = RottingRats;
