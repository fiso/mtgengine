"use strict";
const Constants = require ("../../../Constants");
const PollenbrightWingsBase = require("../setPCA/PollenbrightWings");

class PollenbrightWings extends PollenbrightWingsBase {
  constructor (game) {
    super(game, "Pollenbright Wings", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PollenbrightWings;
