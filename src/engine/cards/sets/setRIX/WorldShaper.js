"use strict";
const Constants = require ("../../../Constants");
const WorldShaperBase = require("../setPRIX/WorldShaper");

class WorldShaper extends WorldShaperBase {
  constructor (game) {
    super(game, "World Shaper", "Rivals of Ixalan", "RIX");
  }
}

module.exports = WorldShaper;
