"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThornwindFaeriesBase = require("../setC13/ThornwindFaeries.js");

class ThornwindFaeries extends ThornwindFaeriesBase {
  constructor(game) {
    super(game, "Thornwind Faeries", "Urza's Legacy", "ULG");
  }
}

module.exports = ThornwindFaeries;
