"use strict";
const Constants = require ("../../../Constants");
const HarbingeroftheTidesBase = require("../setDDT/HarbingeroftheTides");

class HarbingeroftheTides extends HarbingeroftheTidesBase {
  constructor (game) {
    super(game, "Harbinger of the Tides", "Commander 2017", "C17");
  }
}

module.exports = HarbingeroftheTides;
