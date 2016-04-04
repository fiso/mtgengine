"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockshardElemental extends Card {
  constructor(game) {
    super(game, "Rockshard Elemental", "Legions", "LGN");
  }
}

module.exports = RockshardElemental;
