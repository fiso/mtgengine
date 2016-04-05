"use strict";
const Constants = require ("../../../Constants");
const WindfallBase = require("../setBRB/Windfall");

class Windfall extends WindfallBase {
  constructor(game) {
    super(game, "Windfall", "Urza's Saga", "USG");
  }
}

module.exports = Windfall;
