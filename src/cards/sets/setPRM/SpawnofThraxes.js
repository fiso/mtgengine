"use strict";
const Constants = require ("../../../Constants");
const SpawnofThraxesBase = require("../setJOU/SpawnofThraxes");

class SpawnofThraxes extends SpawnofThraxesBase {
  constructor (game) {
    super(game, "Spawn of Thraxes", "Magic Online Promos", "PRM");
  }
}

module.exports = SpawnofThraxes;
