"use strict";
const Constants = require ("../../../Constants");
const CreepingMoldBase = require("../setKLD/CreepingMold");

class CreepingMold extends CreepingMoldBase {
  constructor (game) {
    super(game, "Creeping Mold", "Tenth Edition", "10E");
  }
}

module.exports = CreepingMold;
