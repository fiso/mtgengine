"use strict";
const Constants = require ("../../../Constants");
const WindSpiritBase = require("../set6ED/WindSpirit");

class WindSpirit extends WindSpiritBase {
  constructor (game) {
    super(game, "Wind Spirit", "Ice Age", "ICE");
  }
}

module.exports = WindSpirit;
