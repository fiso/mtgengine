"use strict";
const Constants = require ("../../../Constants");
const StormWorldBase = require("../setME3/StormWorld");

class StormWorld extends StormWorldBase {
  constructor (game) {
    super(game, "Storm World", "Legends", "LEG");
  }
}

module.exports = StormWorld;
