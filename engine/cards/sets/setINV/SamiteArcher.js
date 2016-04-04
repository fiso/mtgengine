"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamiteArcher extends Card {
  constructor(game) {
    super(game, "Samite Archer", "Invasion", "INV");
  }
}

module.exports = SamiteArcher;
