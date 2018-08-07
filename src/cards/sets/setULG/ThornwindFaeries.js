"use strict";
const Constants = require ("../../../Constants");
const ThornwindFaeriesBase = require("../setCMA/ThornwindFaeries");

class ThornwindFaeries extends ThornwindFaeriesBase {
  constructor (game) {
    super(game, "Thornwind Faeries", "Urza's Legacy", "ULG");
  }
}

module.exports = ThornwindFaeries;
