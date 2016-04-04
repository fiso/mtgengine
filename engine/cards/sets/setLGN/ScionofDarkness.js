"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScionofDarknessBase = require("../setARC/ScionofDarkness.js");

class ScionofDarkness extends ScionofDarknessBase {
  constructor(game) {
    super(game, "Scion of Darkness", "Legions", "LGN");
  }
}

module.exports = ScionofDarkness;
