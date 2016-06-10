"use strict";
const Constants = require ("../../../Constants");
const FaerieNobleBase = require("../setHML/FaerieNoble");

class FaerieNoble extends FaerieNobleBase {
  constructor (game) {
    super(game, "Faerie Noble", "Masters Edition III", "ME3");
  }
}

module.exports = FaerieNoble;
