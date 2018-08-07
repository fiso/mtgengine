"use strict";
const Constants = require ("../../../Constants");
const RakshasaVizierBase = require("../setKTK/RakshasaVizier");

class RakshasaVizier extends RakshasaVizierBase {
  constructor (game) {
    super(game, "Rakshasa Vizier", "Magic Online Promos", "PRM");
  }
}

module.exports = RakshasaVizier;
