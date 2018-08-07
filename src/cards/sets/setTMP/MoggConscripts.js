"use strict";
const Constants = require ("../../../Constants");
const MoggConscriptsBase = require("../setTPR/MoggConscripts");

class MoggConscripts extends MoggConscriptsBase {
  constructor (game) {
    super(game, "Mogg Conscripts", "Tempest", "TMP");
  }
}

module.exports = MoggConscripts;
