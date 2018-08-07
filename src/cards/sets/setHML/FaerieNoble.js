"use strict";
const Constants = require ("../../../Constants");
const FaerieNobleBase = require("../setME3/FaerieNoble");

class FaerieNoble extends FaerieNobleBase {
  constructor (game) {
    super(game, "Faerie Noble", "Homelands", "HML");
  }
}

module.exports = FaerieNoble;
