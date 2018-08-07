"use strict";
const Constants = require ("../../../Constants");
const RadjanSpiritBase = require("../setME4/RadjanSpirit");

class RadjanSpirit extends RadjanSpiritBase {
  constructor (game) {
    super(game, "Radjan Spirit", "Fourth Edition", "4ED");
  }
}

module.exports = RadjanSpirit;
