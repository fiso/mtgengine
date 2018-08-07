"use strict";
const Constants = require ("../../../Constants");
const CrucibleofWorldsBase = require("../setM19/CrucibleofWorlds");

class CrucibleofWorlds extends CrucibleofWorldsBase {
  constructor (game) {
    super(game, "Crucible of Worlds", "Magic Online Promos", "PRM");
  }
}

module.exports = CrucibleofWorlds;
