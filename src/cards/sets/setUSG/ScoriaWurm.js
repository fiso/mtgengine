"use strict";
const Constants = require ("../../../Constants");
const ScoriaWurmBase = require("../set10E/ScoriaWurm");

class ScoriaWurm extends ScoriaWurmBase {
  constructor (game) {
    super(game, "Scoria Wurm", "Urza's Saga", "USG");
  }
}

module.exports = ScoriaWurm;
