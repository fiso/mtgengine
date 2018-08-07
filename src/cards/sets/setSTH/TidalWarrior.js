"use strict";
const Constants = require ("../../../Constants");
const TidalWarriorBase = require("../setDDT/TidalWarrior");

class TidalWarrior extends TidalWarriorBase {
  constructor (game) {
    super(game, "Tidal Warrior", "Stronghold", "STH");
  }
}

module.exports = TidalWarrior;
