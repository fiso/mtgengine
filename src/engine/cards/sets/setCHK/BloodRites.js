"use strict";
const Constants = require ("../../../Constants");
const BloodRitesBase = require("../setC13/BloodRites");

class BloodRites extends BloodRitesBase {
  constructor (game) {
    super(game, "Blood Rites", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BloodRites;
