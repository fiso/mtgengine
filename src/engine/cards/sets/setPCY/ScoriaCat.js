"use strict";
const Constants = require ("../../../Constants");
const ScoriaCatBase = require("../setWC01/ScoriaCat");

class ScoriaCat extends ScoriaCatBase {
  constructor (game) {
    super(game, "Scoria Cat", "Prophecy", "PCY");
  }
}

module.exports = ScoriaCat;
