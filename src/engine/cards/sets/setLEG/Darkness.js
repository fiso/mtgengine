"use strict";
const Constants = require ("../../../Constants");
const DarknessBase = require("../setTSB/Darkness");

class Darkness extends DarknessBase {
  constructor (game) {
    super(game, "Darkness", "Legends", "LEG");
  }
}

module.exports = Darkness;
