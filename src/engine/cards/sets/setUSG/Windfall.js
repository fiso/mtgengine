"use strict";
const Constants = require ("../../../Constants");
const WindfallBase = require("../setCM2/Windfall");

class Windfall extends WindfallBase {
  constructor (game) {
    super(game, "Windfall", "Urza's Saga", "USG");
  }
}

module.exports = Windfall;
