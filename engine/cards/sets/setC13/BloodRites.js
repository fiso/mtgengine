"use strict";
const Constants = require ("../../../Constants");
const BloodRitesBase = require("../setCHK/BloodRites");

class BloodRites extends BloodRitesBase {
  constructor(game) {
    super(game, "Blood Rites", "Commander 2013 Edition", "C13");
  }
}

module.exports = BloodRites;
