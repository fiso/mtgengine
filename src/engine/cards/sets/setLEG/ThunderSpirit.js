"use strict";
const Constants = require ("../../../Constants");
const ThunderSpiritBase = require("../setMED/ThunderSpirit");

class ThunderSpirit extends ThunderSpiritBase {
  constructor (game) {
    super(game, "Thunder Spirit", "Legends", "LEG");
  }
}

module.exports = ThunderSpirit;
