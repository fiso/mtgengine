"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireandBrimstone extends Card {
  constructor(game) {
    super(game, "Fire and Brimstone", "The Dark", "DRK");
  }
}

module.exports = FireandBrimstone;
