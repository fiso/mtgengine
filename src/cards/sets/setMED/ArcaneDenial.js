"use strict";
const Constants = require ("../../../Constants");
const ArcaneDenialBase = require("../setALL/ArcaneDenial");

class ArcaneDenial extends ArcaneDenialBase {
  constructor(game) {
    super(game, "Arcane Denial", "Masters Edition", "MED");
  }
}

module.exports = ArcaneDenial;
