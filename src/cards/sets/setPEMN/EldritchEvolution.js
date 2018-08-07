"use strict";
const Constants = require ("../../../Constants");
const EldritchEvolutionBase = require("../setEMN/EldritchEvolution");

class EldritchEvolution extends EldritchEvolutionBase {
  constructor (game) {
    super(game, "Eldritch Evolution", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = EldritchEvolution;
