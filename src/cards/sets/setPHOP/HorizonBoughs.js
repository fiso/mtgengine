"use strict";
const Constants = require ("../../../Constants");
const HorizonBoughsBase = require("../setPCA/HorizonBoughs");

class HorizonBoughs extends HorizonBoughsBase {
  constructor (game) {
    super(game, "Horizon Boughs", "Promotional Planes", "PHOP");
  }
}

module.exports = HorizonBoughs;
