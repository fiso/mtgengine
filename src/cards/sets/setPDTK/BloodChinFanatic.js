"use strict";
const Constants = require ("../../../Constants");
const BloodChinFanaticBase = require("../setDTK/BloodChinFanatic");

class BloodChinFanatic extends BloodChinFanaticBase {
  constructor (game) {
    super(game, "Blood-Chin Fanatic", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = BloodChinFanatic;
