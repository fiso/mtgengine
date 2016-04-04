"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritMantleBase = require("../setM12/SpiritMantle.js");

class SpiritMantle extends SpiritMantleBase {
  constructor(game) {
    super(game, "Spirit Mantle", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SpiritMantle;
