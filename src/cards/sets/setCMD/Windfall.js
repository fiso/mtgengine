"use strict";
const Constants = require ("../../../Constants");
const WindfallBase = require("../setBRB/Windfall");

class Windfall extends WindfallBase {
  constructor (game) {
    super(game, "Windfall", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Windfall;
