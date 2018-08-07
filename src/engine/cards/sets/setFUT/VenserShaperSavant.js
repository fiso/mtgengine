"use strict";
const Constants = require ("../../../Constants");
const VenserShaperSavantBase = require("../setMM3/VenserShaperSavant");

class VenserShaperSavant extends VenserShaperSavantBase {
  constructor (game) {
    super(game, "Venser, Shaper Savant", "Future Sight", "FUT");
  }
}

module.exports = VenserShaperSavant;
