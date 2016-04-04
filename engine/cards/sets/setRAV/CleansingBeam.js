"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CleansingBeamBase = require("../setCMD/CleansingBeam.js");

class CleansingBeam extends CleansingBeamBase {
  constructor(game) {
    super(game, "Cleansing Beam", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CleansingBeam;
