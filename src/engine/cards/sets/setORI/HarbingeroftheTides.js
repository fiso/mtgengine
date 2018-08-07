"use strict";
const Constants = require ("../../../Constants");
const HarbingeroftheTidesBase = require("../setDDT/HarbingeroftheTides");

class HarbingeroftheTides extends HarbingeroftheTidesBase {
  constructor (game) {
    super(game, "Harbinger of the Tides", "Magic Origins", "ORI");
  }
}

module.exports = HarbingeroftheTides;
