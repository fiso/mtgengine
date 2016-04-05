"use strict";
const Constants = require ("../../../Constants");
const ThunderSpiritBase = require("../setLEG/ThunderSpirit");

class ThunderSpirit extends ThunderSpiritBase {
  constructor(game) {
    super(game, "Thunder Spirit", "Masters Edition", "MED");
  }
}

module.exports = ThunderSpirit;
