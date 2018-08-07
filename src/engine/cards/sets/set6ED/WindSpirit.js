"use strict";
const Constants = require ("../../../Constants");
const WindSpiritBase = require("../setME2/WindSpirit");

class WindSpirit extends WindSpiritBase {
  constructor (game) {
    super(game, "Wind Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WindSpirit;
