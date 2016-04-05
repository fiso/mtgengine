"use strict";
const Constants = require ("../../../Constants");
const GloryBase = require("../setJUD/Glory");

class Glory extends GloryBase {
  constructor(game) {
    super(game, "Glory", "Prerelease Events", "pPRE");
  }
}

module.exports = Glory;
