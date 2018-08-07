"use strict";
const Constants = require ("../../../Constants");
const UnderworldDreamsBase = require("../setDPA/UnderworldDreams");

class UnderworldDreams extends UnderworldDreamsBase {
  constructor (game) {
    super(game, "Underworld Dreams", "Magic Online Promos", "PRM");
  }
}

module.exports = UnderworldDreams;
