"use strict";
const Constants = require ("../../../Constants");
const ArcaneDenialBase = require("../setA25/ArcaneDenial");

class ArcaneDenial extends ArcaneDenialBase {
  constructor (game) {
    super(game, "Arcane Denial", "Commander Anthology", "CMA");
  }
}

module.exports = ArcaneDenial;
