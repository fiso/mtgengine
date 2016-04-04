"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreathofLife extends Card {
  constructor(game) {
    super(game, "Breath of Life", "Portal", "POR");
  }
}

module.exports = BreathofLife;
