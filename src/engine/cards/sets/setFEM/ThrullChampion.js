"use strict";
const Constants = require ("../../../Constants");
const ThrullChampionBase = require("../setMED/ThrullChampion");

class ThrullChampion extends ThrullChampionBase {
  constructor (game) {
    super(game, "Thrull Champion", "Fallen Empires", "FEM");
  }
}

module.exports = ThrullChampion;
