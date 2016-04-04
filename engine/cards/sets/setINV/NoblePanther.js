"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoblePanther extends Card {
  constructor(game) {
    super(game, "Noble Panther", "Invasion", "INV");
  }
}

module.exports = NoblePanther;
