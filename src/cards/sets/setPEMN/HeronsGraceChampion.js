"use strict";
const Constants = require ("../../../Constants");
const HeronsGraceChampionBase = require("../setEMN/HeronsGraceChampion");

class HeronsGraceChampion extends HeronsGraceChampionBase {
  constructor (game) {
    super(game, "Heron's Grace Champion", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = HeronsGraceChampion;
