"use strict";
const Constants = require ("../../../Constants");
const NeedleStormBase = require("../set9ED/NeedleStorm");

class NeedleStorm extends NeedleStormBase {
  constructor(game) {
    super(game, "Needle Storm", "Portal", "POR");
  }
}

module.exports = NeedleStorm;
