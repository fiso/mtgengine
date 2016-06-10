"use strict";
const Constants = require ("../../../Constants");
const MoggInfestationBase = require("../setSTH/MoggInfestation");

class MoggInfestation extends MoggInfestationBase {
  constructor (game) {
    super(game, "Mogg Infestation", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggInfestation;
