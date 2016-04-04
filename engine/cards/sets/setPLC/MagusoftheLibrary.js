"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheLibrary extends Card {
  constructor(game) {
    super(game, "Magus of the Library", "Planar Chaos", "PLC");
  }
}

module.exports = MagusoftheLibrary;
