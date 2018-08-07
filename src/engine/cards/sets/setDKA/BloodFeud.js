"use strict";
const Constants = require ("../../../Constants");
const BloodFeudBase = require("../setBBD/BloodFeud");

class BloodFeud extends BloodFeudBase {
  constructor (game) {
    super(game, "Blood Feud", "Dark Ascension", "DKA");
  }
}

module.exports = BloodFeud;
