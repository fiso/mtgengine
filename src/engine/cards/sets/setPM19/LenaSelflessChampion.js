"use strict";
const Constants = require ("../../../Constants");
const LenaSelflessChampionBase = require("../setM19/LenaSelflessChampion");

class LenaSelflessChampion extends LenaSelflessChampionBase {
  constructor (game) {
    super(game, "Lena, Selfless Champion", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = LenaSelflessChampion;
