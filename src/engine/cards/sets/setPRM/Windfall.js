"use strict";
const Constants = require ("../../../Constants");
const WindfallBase = require("../setCM2/Windfall");

class Windfall extends WindfallBase {
  constructor (game) {
    super(game, "Windfall", "Magic Online Promos", "PRM");
  }
}

module.exports = Windfall;
