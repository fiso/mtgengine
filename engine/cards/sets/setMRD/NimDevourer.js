"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimDevourer extends Card {
  constructor(game) {
    super(game, "Nim Devourer", "Mirrodin", "MRD");
  }
}

module.exports = NimDevourer;
