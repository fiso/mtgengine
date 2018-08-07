"use strict";
const Constants = require ("../../../Constants");
const TheAntiquitiesWarBase = require("../setDOM/TheAntiquitiesWar");

class TheAntiquitiesWar extends TheAntiquitiesWarBase {
  constructor (game) {
    super(game, "The Antiquities War", "Dominaria Promos", "PDOM");
  }
}

module.exports = TheAntiquitiesWar;
