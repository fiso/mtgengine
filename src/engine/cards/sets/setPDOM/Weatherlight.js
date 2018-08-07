"use strict";
const Constants = require ("../../../Constants");
const WeatherlightBase = require("../setDOM/Weatherlight");

class Weatherlight extends WeatherlightBase {
  constructor (game) {
    super(game, "Weatherlight", "Dominaria Promos", "PDOM");
  }
}

module.exports = Weatherlight;
