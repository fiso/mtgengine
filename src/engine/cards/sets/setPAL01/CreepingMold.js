"use strict";
const Constants = require ("../../../Constants");
const CreepingMoldBase = require("../setKLD/CreepingMold");

class CreepingMold extends CreepingMoldBase {
  constructor (game) {
    super(game, "Creeping Mold", "Arena League 2001", "PAL01");
  }
}

module.exports = CreepingMold;
