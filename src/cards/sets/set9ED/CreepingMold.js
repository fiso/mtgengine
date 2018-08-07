"use strict";
const Constants = require ("../../../Constants");
const CreepingMoldBase = require("../setKLD/CreepingMold");

class CreepingMold extends CreepingMoldBase {
  constructor (game) {
    super(game, "Creeping Mold", "Ninth Edition", "9ED");
  }
}

module.exports = CreepingMold;
