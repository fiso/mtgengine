"use strict";
const Constants = require ("../../../Constants");
const CreepingMoldBase = require("../setKLD/CreepingMold");

class CreepingMold extends CreepingMoldBase {
  constructor (game) {
    super(game, "Creeping Mold", "World Championship Decks 2000", "WC00");
  }
}

module.exports = CreepingMold;
