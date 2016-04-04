"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flamebreak extends Card {
  constructor(game) {
    super(game, "Flamebreak", "Darksteel", "DST");
  }
}

module.exports = Flamebreak;
