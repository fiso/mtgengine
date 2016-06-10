"use strict";
const Constants = require ("../../../Constants");
const AlabasterDragonBase = require("../setPOR/AlabasterDragon");

class AlabasterDragon extends AlabasterDragonBase {
  constructor (game) {
    super(game, "Alabaster Dragon", "Weatherlight", "WTH");
  }
}

module.exports = AlabasterDragon;
