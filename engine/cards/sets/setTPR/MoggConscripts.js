"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggConscriptsBase = require("../setTMP/MoggConscripts.js");

class MoggConscripts extends MoggConscriptsBase {
  constructor(game) {
    super(game, "Mogg Conscripts", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggConscripts;
