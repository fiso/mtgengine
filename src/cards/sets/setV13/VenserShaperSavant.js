"use strict";
const Constants = require ("../../../Constants");
const VenserShaperSavantBase = require("../setMM3/VenserShaperSavant");

class VenserShaperSavant extends VenserShaperSavantBase {
  constructor (game) {
    super(game, "Venser, Shaper Savant", "From the Vault: Twenty", "V13");
  }
}

module.exports = VenserShaperSavant;
