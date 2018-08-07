"use strict";
const Constants = require ("../../../Constants");
const WindSpiritBase = require("../setME2/WindSpirit");

class WindSpirit extends WindSpiritBase {
  constructor (game) {
    super(game, "Wind Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = WindSpirit;
