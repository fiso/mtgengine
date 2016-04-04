"use strict";
const Constants = require ("../../../Constants");
const ThrullChampionBase = require("../setFEM/ThrullChampion");

class ThrullChampion extends ThrullChampionBase {
  constructor(game) {
    super(game, "Thrull Champion", "Masters Edition", "MED");
  }
}

module.exports = ThrullChampion;
