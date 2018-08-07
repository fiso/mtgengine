"use strict";
const Constants = require ("../../../Constants");
const SoltariChampionBase = require("../setTPR/SoltariChampion");

class SoltariChampion extends SoltariChampionBase {
  constructor (game) {
    super(game, "Soltari Champion", "Stronghold", "STH");
  }
}

module.exports = SoltariChampion;
