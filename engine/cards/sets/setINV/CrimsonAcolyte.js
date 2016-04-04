"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrimsonAcolyte extends Card {
  constructor(game) {
    super(game, "Crimson Acolyte", "Invasion", "INV");
  }
}

module.exports = CrimsonAcolyte;
