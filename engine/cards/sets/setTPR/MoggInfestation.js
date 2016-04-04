"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggInfestationBase = require("../setSTH/MoggInfestation.js");

class MoggInfestation extends MoggInfestationBase {
  constructor(game) {
    super(game, "Mogg Infestation", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggInfestation;
