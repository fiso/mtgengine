"use strict";
const Constants = require ("../../../Constants");
const GlassdustHulkBase = require("../setMM2/GlassdustHulk");

class GlassdustHulk extends GlassdustHulkBase {
  constructor (game) {
    super(game, "Glassdust Hulk", "Alara Reborn", "ARB");
  }
}

module.exports = GlassdustHulk;
