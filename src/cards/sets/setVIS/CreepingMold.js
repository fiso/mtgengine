"use strict";
const Constants = require ("../../../Constants");
const CreepingMoldBase = require("../setpARL/CreepingMold");

class CreepingMold extends CreepingMoldBase {
  constructor(game) {
    super(game, "Creeping Mold", "Visions", "VIS");
  }
}

module.exports = CreepingMold;
