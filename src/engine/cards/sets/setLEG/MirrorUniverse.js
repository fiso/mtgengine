"use strict";
const Constants = require ("../../../Constants");
const MirrorUniverseBase = require("../setMED/MirrorUniverse");

class MirrorUniverse extends MirrorUniverseBase {
  constructor (game) {
    super(game, "Mirror Universe", "Legends", "LEG");
  }
}

module.exports = MirrorUniverse;
