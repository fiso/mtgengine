"use strict";
const Constants = require ("../../../Constants");
const GrimHaruspexBase = require("../setKTK/GrimHaruspex");

class GrimHaruspex extends GrimHaruspexBase {
  constructor (game) {
    super(game, "Grim Haruspex", "Prerelease Events", "pPRE");
  }
}

module.exports = GrimHaruspex;
