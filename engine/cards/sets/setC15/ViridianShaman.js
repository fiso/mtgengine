"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViridianShaman extends Card {
  constructor(game) {
    super(game, "Viridian Shaman", "Commander 2015", "C15");
  }
}

module.exports = ViridianShaman;
