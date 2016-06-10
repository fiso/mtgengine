"use strict";
const Constants = require ("../../../Constants");
const StormWorldBase = require("../setLEG/StormWorld");

class StormWorld extends StormWorldBase {
  constructor (game) {
    super(game, "Storm World", "Masters Edition III", "ME3");
  }
}

module.exports = StormWorld;
