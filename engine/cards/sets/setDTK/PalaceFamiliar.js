"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PalaceFamiliar extends Card {
  constructor(game) {
    super(game, "Palace Familiar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PalaceFamiliar;
