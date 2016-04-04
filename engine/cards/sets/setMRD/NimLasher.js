"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimLasher extends Card {
  constructor(game) {
    super(game, "Nim Lasher", "Mirrodin", "MRD");
  }
}

module.exports = NimLasher;
