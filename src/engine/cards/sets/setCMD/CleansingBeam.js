"use strict";
const Constants = require ("../../../Constants");
const CleansingBeamBase = require("../setCMA/CleansingBeam");

class CleansingBeam extends CleansingBeamBase {
  constructor (game) {
    super(game, "Cleansing Beam", "Commander 2011", "CMD");
  }
}

module.exports = CleansingBeam;
