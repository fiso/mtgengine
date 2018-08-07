"use strict";
const Constants = require ("../../../Constants");
const SamuttheTestedBase = require("../setHOU/SamuttheTested");

class SamuttheTested extends SamuttheTestedBase {
  constructor (game) {
    super(game, "Samut, the Tested", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = SamuttheTested;
