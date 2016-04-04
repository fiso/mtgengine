"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlphaMyr extends Card {
  constructor(game) {
    super(game, "Alpha Myr", "Mirrodin", "MRD");
  }
}

module.exports = AlphaMyr;
