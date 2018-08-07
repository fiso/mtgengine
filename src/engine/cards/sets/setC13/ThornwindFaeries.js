"use strict";
const Constants = require ("../../../Constants");
const ThornwindFaeriesBase = require("../setCMA/ThornwindFaeries");

class ThornwindFaeries extends ThornwindFaeriesBase {
  constructor (game) {
    super(game, "Thornwind Faeries", "Commander 2013", "C13");
  }
}

module.exports = ThornwindFaeries;
