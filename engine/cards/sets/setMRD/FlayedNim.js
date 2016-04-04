"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlayedNim extends Card {
  constructor(game) {
    super(game, "Flayed Nim", "Mirrodin", "MRD");
  }
}

module.exports = FlayedNim;
