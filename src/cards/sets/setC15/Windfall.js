"use strict";
const Constants = require ("../../../Constants");
const WindfallBase = require("../setBRB/Windfall");

class Windfall extends WindfallBase {
  constructor (game) {
    super(game, "Windfall", "Commander 2015", "C15");
  }
}

module.exports = Windfall;
