"use strict";
const Constants = require ("../../../Constants");
const TheFirstEruptionBase = require("../setDOM/TheFirstEruption");

class TheFirstEruption extends TheFirstEruptionBase {
  constructor (game) {
    super(game, "The First Eruption", "Dominaria Promos", "PDOM");
  }
}

module.exports = TheFirstEruption;
