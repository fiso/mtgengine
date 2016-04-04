"use strict";
const Constants = require ("../../../Constants");
const MirrorUniverseBase = require("../setLEG/MirrorUniverse");

class MirrorUniverse extends MirrorUniverseBase {
  constructor(game) {
    super(game, "Mirror Universe", "Masters Edition", "MED");
  }
}

module.exports = MirrorUniverse;
