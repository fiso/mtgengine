"use strict";
const Constants = require ("../../../Constants");
const HeronsGraceChampionBase = require("../setEMN/HeronsGraceChampion");

class HeronsGraceChampion extends HeronsGraceChampionBase {
  constructor (game) {
    super(game, "Heron's Grace Champion", "Magic Online Promos", "PRM");
  }
}

module.exports = HeronsGraceChampion;
