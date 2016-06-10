"use strict";
const Constants = require ("../../../Constants");
const MoggConscriptsBase = require("../setTMP/MoggConscripts");

class MoggConscripts extends MoggConscriptsBase {
  constructor (game) {
    super(game, "Mogg Conscripts", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggConscripts;
