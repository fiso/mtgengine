"use strict";
const Constants = require ("../../../Constants");
const TemberCityBase = require("../setPCA/TemberCity");

class TemberCity extends TemberCityBase {
  constructor (game) {
    super(game, "Tember City", "Promotional Planes", "PHOP");
  }
}

module.exports = TemberCity;
