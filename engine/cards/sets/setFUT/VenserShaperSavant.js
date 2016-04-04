"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VenserShaperSavantBase = require("../setV13/VenserShaperSavant.js");

class VenserShaperSavant extends VenserShaperSavantBase {
  constructor(game) {
    super(game, "Venser, Shaper Savant", "Future Sight", "FUT");
  }
}

module.exports = VenserShaperSavant;
