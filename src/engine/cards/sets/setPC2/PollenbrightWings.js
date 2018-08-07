"use strict";
const Constants = require ("../../../Constants");
const PollenbrightWingsBase = require("../setPCA/PollenbrightWings");

class PollenbrightWings extends PollenbrightWingsBase {
  constructor (game) {
    super(game, "Pollenbright Wings", "Planechase 2012", "PC2");
  }
}

module.exports = PollenbrightWings;
