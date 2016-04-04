"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Absorb extends Card {
  constructor(game) {
    super(game, "Absorb", "Invasion", "INV");
  }
}

module.exports = Absorb;
