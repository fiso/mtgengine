"use strict";
const Constants = require ("../../../Constants");
const VenserShaperSavantBase = require("../setV13/VenserShaperSavant");

class VenserShaperSavant extends VenserShaperSavantBase {
  constructor(game) {
    super(game, "Venser, Shaper Savant", "Future Sight", "FUT");
  }
}

module.exports = VenserShaperSavant;
