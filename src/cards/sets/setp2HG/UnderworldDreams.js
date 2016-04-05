"use strict";
const Constants = require ("../../../Constants");
const UnderworldDreamsBase = require("../setDPA/UnderworldDreams");

class UnderworldDreams extends UnderworldDreamsBase {
  constructor(game) {
    super(game, "Underworld Dreams", "Two-Headed Giant Tournament", "p2HG");
  }
}

module.exports = UnderworldDreams;
