"use strict";
const Constants = require ("../../../Constants");
const CleansingBeamBase = require("../setCMD/CleansingBeam");

class CleansingBeam extends CleansingBeamBase {
  constructor (game) {
    super(game, "Cleansing Beam", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CleansingBeam;
