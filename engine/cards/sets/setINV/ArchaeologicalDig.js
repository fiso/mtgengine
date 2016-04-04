"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArchaeologicalDig extends Card {
  constructor(game) {
    super(game, "Archaeological Dig", "Invasion", "INV");
  }
}

module.exports = ArchaeologicalDig;
