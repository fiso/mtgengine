"use strict";
const Constants = require ("../../../Constants");
const RadjanSpiritBase = require("../set6ED/RadjanSpirit");

class RadjanSpirit extends RadjanSpiritBase {
  constructor(game) {
    super(game, "Radjan Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = RadjanSpirit;
